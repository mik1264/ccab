# Optimal Matching Problem: Research Report

## Educational Market Parallels & Student Welfare Optimization

---

## Table of Contents

1. [Overview](#1-overview)
2. [The Gale-Shapley Algorithm (1962)](#2-the-gale-shapley-algorithm-1962)
3. [The 2012 Nobel Prize in Economics](#3-the-2012-nobel-prize-in-economics)
4. [Key Algorithms and Variants](#4-key-algorithms-and-variants)
5. [Education Market Applications](#5-education-market-applications)
6. [The Asymmetry Problem](#6-the-asymmetry-problem)
7. [Optimizing for Student Well-Being](#7-optimizing-for-student-well-being)
8. [Critiques, Limitations, and Equity Concerns](#8-critiques-limitations-and-equity-concerns)
9. [Existing Simulations and Visualizations](#9-existing-simulations-and-visualizations)
10. [Recent Developments (2023-2026)](#10-recent-developments-2023-2026)
11. [Summary: Algorithm Comparison Table](#11-summary-algorithm-comparison-table)
12. [References](#12-references)

---

## 1. Overview

The **optimal matching problem** (also called the **stable matching problem**) seeks to pair members of two groups such that no two unmatched individuals would prefer each other over their assigned partners. Such a dissatisfied pair is called a **blocking pair**, and its presence makes the matching **unstable**.

The problem was formalized in 1962 by David Gale and Lloyd Shapley, who proved that a stable matching always exists and provided an algorithm to find one. This theoretical work, combined with Alvin Roth's practical applications, earned the 2012 Nobel Memorial Prize in Economic Sciences.

### Why This Matters for Education

Education markets are a natural application: students have preferences over schools, and schools have priorities over students. The question of **who proposes** (students or schools) has measurable, asymmetric effects on outcomes — making algorithm design a policy decision with direct consequences for student welfare.

---

## 2. The Gale-Shapley Algorithm (1962)

### Origin

In 1962, David Gale and Lloyd Shapley published *"College Admissions and the Stability of Marriage"* in The American Mathematical Monthly. Gale posed the problem and defined stability; Shapley responded with the deferred acceptance algorithm and its proof. Remarkably, Alvin Roth later discovered that an essentially identical algorithm had already been in practical use since the early 1950s in the National Resident Matching Program (NRMP).

### The Stable Matching Problem (Formal Definition)

Given two equally sized sets of participants (e.g., students and schools), each with a strict preference ordering over members of the other set, find a **stable matching** — a one-to-one pairing such that no blocking pair exists.

A **blocking pair** (A, B) exists when:
- A prefers B over their current partner, AND
- B prefers A over their current partner

### The Deferred Acceptance (DA) Algorithm — Step by Step

```
ROUND 1:
  Each unmatched proposer proposes to their top-ranked choice.
  Each receiver evaluates all proposals received:
    - If currently unmatched → tentatively accept the best proposer
    - If currently matched → keep the better of current partner vs best new proposer; reject the rest

ROUND 2+:
  Each rejected proposer proposes to their next choice.
  Receivers again compare and keep/replace tentatively.

TERMINATION:
  When no unmatched proposer has anyone left to propose to.
  All tentative matches become final.
```

**Key word: "Deferred."** Acceptances are tentative — a receiver can upgrade in later rounds. This is the critical difference from the Boston Mechanism (see §4.5).

### Formal Properties

| Property | Description |
|----------|-------------|
| **Guaranteed Stability** | Always produces a stable matching with no blocking pairs |
| **Proposer-Optimality** | Each proposer gets their best "valid partner" (best achievable across all stable matchings) |
| **Receiver-Pessimality** | Each receiver gets their worst valid partner (worst across all stable matchings) |
| **Strategy-Proof for Proposers** | No proposer benefits from misrepresenting preferences, even in coalitions |
| **Manipulable by Receivers** | Receivers can sometimes benefit from strategic truncation of preference lists |
| **Deterministic** | Output is the same regardless of proposal order |
| **Time Complexity** | O(n²) — at most n² proposals total |
| **Space Complexity** | O(n²) for preference lists; O(n) for the matching |

### Proof of Stability (Sketch)

Suppose (A, B) is a blocking pair in the output. Then A prefers B over their final partner, meaning A must have proposed to B before reaching their final partner. But B rejected A in favor of someone B prefers more — so B does not prefer A over their final partner. Contradiction.

### The Lattice of Stable Matchings

For any instance, the set of all stable matchings forms a **distributive lattice**. The proposer-optimal matching is at the top; the receiver-optimal matching is at the bottom. The number of stable matchings can range from 1 to exponentially many, and counting the exact number is #P-complete.

---

## 3. The 2012 Nobel Prize in Economics

The 2012 Sveriges Riksbank Prize in Economic Sciences was awarded jointly to **Alvin E. Roth** (Stanford) and **Lloyd S. Shapley** (UCLA) *"for the theory of stable allocations and the practice of market design."*

### Shapley's Contributions (Theory)

- Proved existence of stable matchings (with Gale, 1962)
- Developed the DA algorithm with constructive proof
- Established proposer-optimality/receiver-pessimality theorems
- With Scarf (1974): proved the core of the housing market is non-empty, leading to the Top Trading Cycles algorithm

### Roth's Contributions (Practice)

- **NRMP discovery (1984):** Showed the medical residency match had been using Gale-Shapley since the 1950s, and that its success was due to stability
- **Strategy-proofness (1982):** Proved DA is strategy-proof for the proposing side
- **NRMP redesign (1995-98):** Changed the algorithm from hospital-proposing to applicant-proposing
- **NYC school choice (2003-04):** Co-designed the student-proposing DA system that reduced unmatched students from 30,000 to ~3,000
- **Kidney exchange:** Co-founded the New England Program for Kidney Exchange

The Nobel Committee: *"Even though these two researchers worked independently of one another, the combination of Shapley's basic theory and Roth's empirical investigations, experiments and practical design has generated a flourishing field of research and improved the performance of many markets."*

Note: David Gale died in 2008 and would likely have shared the prize.

---

## 4. Key Algorithms and Variants

### 4.1 Deferred Acceptance (DA)

The Gale-Shapley algorithm itself (see §2). The canonical mechanism for stable matching.

### 4.2 Top Trading Cycles (TTC)

Developed by Gale, published by Shapley and Scarf (1974), applied to school choice by Abdulkadiroğlu and Sönmez (2003).

**How it works:**
1. Each student points to their most-preferred school; each school points to the student with highest priority
2. At least one cycle exists in this directed graph
3. Execute all cycles: assign each student in a cycle to the school they point to
4. Remove assigned students; reduce school capacities; remove full schools
5. Repeat until all students are assigned

**Properties:**
- Pareto-efficient (no student can improve without harming another)
- Strategy-proof (truthful reporting is a dominant strategy)
- **NOT stable** — may produce blocking pairs (violates school priorities)

**Real-world use:** New Orleans adopted TTC in 2012 (first K-12 implementation) but later switched back to DA because TTC's violation of school priorities was politically unacceptable.

### 4.3 Serial Dictatorship (SD)

1. Fix an ordering of students
2. First student picks their top choice
3. Each subsequent student picks their top remaining choice

**Properties:** Pareto-efficient, strategy-proof, group-strategy-proof. But unfair — outcome depends entirely on the ordering. **Random Serial Dictatorship (RSD)** draws the ordering randomly for fairness.

### 4.4 Hungarian Algorithm (Weighted Matching)

The Kuhn-Munkres algorithm (1955) solves the **assignment problem**: finding a maximum-weight perfect matching in a weighted bipartite graph.

**Key difference from DA:** Uses cardinal utilities (numerical weights), not ordinal preferences (rankings). Finds the optimal *total* weight, not a stable matching. O(n³) complexity.

This is useful when you can quantify match quality numerically (e.g., test score fit, geographic proximity scores) rather than simply ranking preferences.

### 4.5 Boston Mechanism (Immediate Acceptance)

**How it works:**
1. Round 1: Students apply to first-choice school. Schools accept by priority up to capacity. **Acceptances are FINAL.**
2. Round 2: Unmatched students apply to second choice. Schools fill remaining seats.
3. Continue until all placed.

**The critical flaw:** Because acceptances are final (not deferred), a student rejected in round 1 can never get into a school that filled in round 1, even if they had higher priority than some accepted students. This forces families to strategize — listing "safe" schools first rather than true preferences.

**Properties:**
- NOT strategy-proof — sophisticated families game the system
- NOT stable — produces blocking pairs
- **Inequitable:** Non-strategic families (often lower-income, less-informed) are disproportionately harmed

Used by Boston until 2005, then replaced with DA after research by Abdulkadiroğlu et al. demonstrated the harm.

### 4.6 Student-Optimal Stable Matching (SOSM)

This is student-proposing DA applied to many-to-one settings (college admissions). Each student proposes; schools hold tentatively up to their quota.

**Properties:**
- Stable
- Strategy-proof for students
- Gives every student their best achievable stable outcome
- Used by: NRMP (since 1998), NYC schools (since 2003), Boston schools (since 2005)

### 4.7 Many-to-One Matching (College Admissions / Hospital-Resident)

The generalization where each institution has a **quota** (multiple positions). DA extends naturally — institutions hold tentatively up to their quota.

**The Rural Hospitals Theorem** (Roth, 1986): Across ALL stable matchings:
- The same participants are matched/unmatched
- Each institution receives the same number of partners
- Any undersubscribed institution receives exactly the same set of partners

Implication: Undersubscribed "rural hospitals" (or unpopular schools) cannot improve their situation by changing the mechanism. Their problem is a supply/demand mismatch, not an algorithm problem.

---

## 5. Education Market Applications

### 5.1 United States School Choice

**New York City (2003-04 redesign):**
- **Before:** Decentralized system, 5 choices allowed. Schools made decisions independently, hid capacity to reserve seats. ~30,000 students per year administratively placed at schools they never listed.
- **After:** Student-proposing DA. Students list up to 12 choices. ~70,000 students matched to ~400 schools annually. Unmatched students dropped from 30,000 to ~3,000.
- Designed by Abdulkadiroğlu, Pathak, and Roth.

**Boston (2005 redesign):**
- **Before:** The eponymous Boston Mechanism. Research showed non-strategic families were disproportionately harmed.
- **After:** Student-proposing DA. Officials chose DA over TTC for transparency and explainability.

**New Orleans (2012):**
- Launched **OneApp**, coordinating admissions across traditional and charter schools.
- Initially used TTC (first real-world K-12 implementation) — later switched to DA.

**Other U.S. cities:** Denver, Washington D.C., Newark, Camden (NJ), Indianapolis have adopted similar DA-based systems.

### 5.2 The NRMP (Medical Residency Matching)

- **Founded 1952:** Created to solve "unraveling" — hospitals making offers 2 years in advance with "exploding offers" valid for only 12 hours.
- **Original algorithm (1952-1997):** Hospital-proposing (hospital-optimal DA).
- **Roth's discovery (1984):** Showed the NRMP was equivalent to Gale-Shapley and explained its success through stability.
- **Redesign (1998):** Switched to applicant-proposing (student-optimal DA). Changed outcomes for ~1 in 1,000 applicants, but the principle mattered.
- **Current scale (2025):** 37,667 of 47,208 applicants matched (79.8%).
- **Couples:** NRMP accommodates couples who must match together. With couples, the problem is NP-complete in general, but Kojima and Pathak (2009) showed stable matchings exist with high probability in large markets with few couples.

### 5.3 University Admissions Worldwide

As of 2018, at least **46 countries** use centralized admissions systems.

**China (world's largest matching market):**
- ~10 million students compete for ~7 million seats annually via the Gaokao exam
- Originally used sequential/immediate acceptance (Boston-like mechanism)
- Most provinces switched to a "parallel mechanism" (hybrid between IA and DA) — 28 of 31 provinces by 2016
- Inner Mongolia: dynamic mechanism where students see cutoff scores and revise choices in real time

**Turkey:** Fully centralized, priority determined solely by national exam scores.

**United Kingdom (UCAS):** A decentralized, pre-qualification, conditional-offer-based system. Students apply to up to 5 universities before A-level results. Universities make conditional offers based on predicted grades. On results day, students are confirmed or enter "Clearing" — a post-results matching process where ~68,000 students secured places in 2024. Since 2019, UCAS operates "Clearing Plus," an algorithmic tool suggesting up to 50 personalized course matches. Economists have proposed switching to a centralized DA algorithm with post-qualification admissions, but universities resist due to compressed timelines and concerns about widening-participation students.

**Hungary:** Uses student-proposing DA for college admissions. Research using administrative data reveals that **11% of applicants** make dominated choices (e.g., forgoing free tuition waivers), costing on average $6,600. This shows that even under strategy-proof mechanisms, cognitive errors and information gaps produce significant welfare losses.

**Decentralized systems:** U.S. undergraduate admissions, Japan — students apply to institutions separately.

### 5.4 The Education Market as a Matching Problem

Education markets differ from classical matching in several important ways:

| Feature | Classical (Marriage) | Education Market |
|---------|---------------------|------------------|
| Sides | Men ↔ Women | Students ↔ Schools |
| Capacity | One-to-one | Many-to-one (schools have quotas) |
| Priorities | Strict preferences both sides | Schools often have coarse priorities (tiers, not strict rankings) |
| Participation | Voluntary | Compulsory (every student must attend school) |
| Information | Full knowledge of preferences | Asymmetric — schools know more about quality signals |
| Repeat interaction | One-time | Students may re-enter the market (transfers, re-application) |

---

## 6. The Asymmetry Problem

### The Fundamental Theorem

The DA algorithm has a deep structural asymmetry: **the proposing side receives their best possible stable outcome; the receiving side receives their worst possible stable outcome.**

This is not a tendency — it is a mathematical theorem. As the literature states: *"The matching is always best for the group that makes the propositions, and worst for the group that decides how to handle each proposal... it pays to be 'pushy'!"*

### Two Variants in College Admissions

| Variant | Who Proposes | Who Benefits | Who Is Disadvantaged |
|---------|-------------|-------------|---------------------|
| **SODA** (Student-Optimal DA) | Students | Students | Universities/Schools |
| **CODA** (College-Optimal DA) | Colleges | Colleges | Students |

### Measured Impact

**The NRMP case study:** The original NRMP (1952-1997) was hospital-proposing, systematically favoring hospitals over applicants. When redesigned to applicant-proposing in 1998, the empirical difference was small (~1 in 1,000 applicants), but the principle was significant: the mechanism should not systematically disadvantage the side it serves.

**NYC school choice:** Switching to student-proposing DA meant families could truthfully report preferences. Under the old decentralized system, strategic behavior led to highly inequitable outcomes — students from more-informed families got better placements.

### What Matters More Than the Algorithm

Research by Leshno and Lo found that the **priority structure** — how districts decide which traits to prioritize (distance, siblings, lottery, socioeconomic status) — matters more than the choice of algorithm. The priority structure determines each student's set of achievable schools, making it *"hugely important, no matter the algorithm."*

This is a key insight: debates about algorithm choice (DA vs. TTC) may be less consequential than debates about priority policy.

---

## 7. Optimizing for Student Well-Being

### The Core Trade-Off (Impossibility Triangle)

Three desirable properties cannot be simultaneously satisfied:

```
        STABILITY
       (no blocking pairs /
        respects school priorities)
           /\
          /  \
         /    \
        /  ??  \
       /________\
STRATEGY-        PARETO
PROOFNESS        EFFICIENCY
(no benefit      (no student can improve
 from lying)      without harming another)
```

- **DA** achieves stability + strategy-proofness, but NOT Pareto efficiency (when there are ties)
- **TTC** achieves strategy-proofness + Pareto efficiency, but NOT stability
- **No mechanism** achieves all three

### Why DA Is Inefficient (The Tie-Breaking Problem)

In practice, school priorities are **coarse** (e.g., Boston has only 4 priority classes). Students within the same class are ordered by random lottery. This tie-breaking makes DA inefficient — the output may be Pareto-dominated by another stable matching.

**Abdulkadiroğlu, Pathak, and Roth (2009):** There exists no strategy-proof mechanism that Pareto-improves on DA with single tie-breaking. The welfare loss from tie-breaking is the *"cost of providing straightforward incentives."*

### Mechanisms That Improve Student Welfare

#### 7.1 Stable Improvement Cycles (Erdil and Ergin, 2008)

If DA with tie-breaking produces an inefficient stable matching, cyclic trades among students can Pareto-improve the matching without sacrificing stability.

**Impact:** Applied to 2003-04 NYC data, **6,854 students (10.5% of 63,795)** would have been matched to more-preferred schools without harming anyone.

**Limitation:** Not strategy-proof (but hard to manipulate in practice).

#### 7.2 EADAM: Efficiency-Adjusted Deferred Acceptance (Kesten, 2010)

Traces DA's welfare loss to "interrupters" — students who cause rejections at a school but are themselves later rejected from that school.

**How it works:**
1. Run DA; identify "underdemanded" schools (never reject anyone)
2. Make matches at underdemanded schools permanent; remove those students/schools
3. Rerun DA on the reduced market
4. Repeat until all matched

**Properties:**
- Pareto-improves on DA (weakly better for all, strictly better for some)
- Not strategy-proof, but manipulation requires complex reasoning
- Under limited information, truth-telling is a Bayesian Nash equilibrium
- **Real-world adoption:** The Flemish Ministry of Education (Belgium) has implemented EADAM

#### 7.3 TTC for School Choice

If stability is not required:
- TTC is both strategy-proof AND Pareto-efficient
- But violates school priorities — politically unacceptable in most jurisdictions
- Kesten (2004) and others have proposed TTC variants that improve stability properties

#### 7.4 Acyclicity Conditions (Ergin, 2002)

When the priority structure is "acyclic," DA is automatically Pareto-efficient, group-strategy-proof, and consistent. Under acyclicity, the stability-efficiency trade-off vanishes entirely.

A 2025 paper showed that when priorities satisfy certain structural conditions (base points + school-dependent bonus points), DA and TTC produce identical outcomes.

### Practical Recommendations for Student-Optimizing Systems

1. **Use student-proposing DA** (not school-proposing) — ensures student-optimal stable matching
2. **Consider EADAM** where politically feasible — Pareto-improves on DA with minimal strategic vulnerability
3. **Allow long preference lists** — short lists constrain students and reduce match quality
4. **Design priority structures carefully** — priority policy matters more than algorithm choice
5. **Provide equal information** — strategy-proofness only helps if families know they should report truthfully
6. **Address coarse priorities** — explore multiple tie-breaking methods or stable improvement cycles

### The Information Equity Problem

Strategy-proofness (as in DA) means no family gains from strategic manipulation. But this only helps if families **know** they should report truthfully. Research in New Orleans revealed a gap between how algorithm designers and families understand fairness:
- **Designers** interpret fairness procedurally (the algorithm treats everyone equally)
- **Families** evaluate fairness consequentially (through the lens of socioeconomic and racial inequality)

True student welfare optimization requires not just a good algorithm but also equitable information access, transparent priority structures, and community engagement.

---

## 8. Critiques, Limitations, and Equity Concerns

### 8.1 Market Thickness and Congestion

NYC's original school choice system suffered from congestion — students could be simultaneously admitted to multiple schools, creating cascading uncertainty. The DA mechanism solved this by producing a single definitive assignment. Research by Arteaga, Kapor, Neilson, and Zimmerman (2022, *QJE*) showed that "smart matching platforms" providing real-time application data reduced nonplacement risk by **58%** and helped students enroll in higher-quality schools.

### 8.2 Short Preference Lists

Many real-world systems constrain students to short lists (NYC: 12, some English authorities: 3). This has significant consequences:

- **Truncated DA is not strategy-proof.** When students can only list *k* schools, strategic incentives re-emerge.
- A non-trivial fraction of students may remain **unmatched** in large markets with short lists.
- Research on optimal truncation shows significant strategic manipulation remains possible even in DA-based systems with constrained lists.

### 8.3 Information Asymmetry

Even under strategy-proof mechanisms, welfare losses arise from **information gaps**:

- "Informed" parents who research school quality achieve systematically better outcomes than "uninformed" parents.
- **Personalized information interventions** are far more effective than generic nudges — people who receive personalized warnings about placement risk change their beliefs and behavior.
- Hastings and Weinstein found that providing school test score information improves outcomes **especially for disadvantaged students**.
- A critical insight: *"Strategy-proofness in the school choice problem does not correspond to strategy-proofness in the broader choice process"* — the search, information-gathering, and preference-formation process that precedes the formal mechanism is NOT strategy-proof, and this is where much inequality enters.

### 8.4 How Matching Algorithms Can Perpetuate Inequality

Research from 2022-2026 identifies several mechanisms:

1. **Differential preferences shaped by social hierarchies:** A *PNAS* study showed that school choice increases segregation even when parents do not care about race, because Black and White parents value different school attributes — driven by structural inequality, not explicit preferences.

2. **Patience and waiting costs:** Research among 274,316 students found that low-SES students were significantly less likely to wait for preferred offers. Matching algorithms that reward patience deepen social inequalities.

3. **Application mismatch:** Applicants from disadvantaged groups are more likely to "overreach" or "undermatch" — both leading to worse outcomes.

4. **The England counterexample (Terrier, Pathak, and Ren, 2026):** When England banned Immediate Acceptance in 2008 and switched to DA, the results were counterintuitive — **the elimination of IA reduced school quality for low-SES students more than for high-SES students**. Under the old manipulable mechanism, high-SES parents strategically avoided competitive schools, paradoxically creating space for low-SES students. Under DA, truthful reporting by high-SES families increased competition for top schools, crowding out low-SES students. This is perhaps the most sobering finding in the field.

5. **EADAM's limitation:** The Efficiency-Adjusted DA mechanism does not benefit students assigned to their worst-ranked schools, potentially maintaining school segregation patterns.

### 8.5 The Rural Hospital Theorem and Education Parallels

**The Theorem (Roth, 1986):** In any stable matching, the set of assigned participants and the number of filled positions at each institution are **identical across all stable matchings**.

**Education implication:** For small, underdemanded schools:
- No stable matching mechanism can help unpopular schools attract more or better-qualified students
- If a school has unfilled seats under one stable matching, it has the same unfilled seats under every stable matching
- The theorem extends to preferences with affirmative action constraints (Kojima, 2012)

**Policy implication:** To improve outcomes for underdemanded schools, policymakers must go **beyond the matching mechanism itself** — by improving school quality, providing transportation, adding incentives, or using non-stable rules that sacrifice stability for other goals.

---

## 9. Existing Simulations and Visualizations

### Interactive Web Demos

| Name | URL | Description |
|------|-----|-------------|
| Gale-Shapley Visualizer | gale-shapley.com | React-based step-by-step algorithm visualization |
| Stable Matching Visualized | UW CSE 442 project | Interactive walkthrough with real-world context |
| Gale-Shapley Demonstration | sephlietz.com/gale-shapley | Click-through proposal/rejection rounds |
| Matchu.ai | matchu.ai/GaleShapley | DA visualization with stability property exploration |

### Code Repositories

| Repository | Language | Description |
|------------|----------|-------------|
| lwcarani/matching-algorithms | Python | Gale-Shapley (DA) and TTC implementations |
| marmelab/marriage-algorithms | JavaScript | Stable marriage algorithms including many-to-one |
| algorithm-visualizer | Multi-language | General algorithm visualization platform |

### Academic Resources

- **Princeton Lecture Slides** (Kleinberg-Tardos): Comprehensive PDF on stable matching
- **Nobel Prize Popular Science Document**: Accessible overview of the theory and its applications

---

## 10. Recent Developments (2023-2026)

### Efficient Stable Matching Under Acyclicity (2025)

A 2025 paper in *Economics Letters* demonstrated that when preference and priority lists satisfy acyclicity conditions, DA and TTC produce identical outcomes — meaning the stability-efficiency trade-off disappears entirely under structural conditions.

### School Choice with Transferable Characteristics (2024)

Rodriguez-Alvarez and Romero-Medina (*Games and Economic Behavior*, 2024) introduced **SETC** algorithms: when student characteristics (e.g., geographic proximity) transfer through seat swaps, fair Pareto improvements are achievable without generating justified envy.

### Capacity Planning (2023-2024)

Research at EC 2023 explored optimal allocation of additional school seats, balancing **access** (prioritizing unassigned students) versus **merit** (allocating seats that benefit multiple students through improvement chains).

### EADAM Implementation in Flanders, Belgium

The Flemish Ministry of Education has implemented EADAM — the first real-world deployment of this efficiency-improving mechanism, representing a significant step in bridging theory and practice.

### NYC Algorithm Audit (2024-2025)

A New York State Comptroller audit found:
- 7,000 students in temporary housing not assured appropriate priority
- Algorithm did not account for both current and prior addresses as required
- Low-income students systematically under-identified for priority access

### Reny (2022) — Priority-Efficient Matching (*AER*)

Philip Reny introduced "priority-neutral" and "priority-efficient" matchings, showing there exists a **unique priority-efficient matching** that dominates every stable matching. Truth-telling is a **maxmin optimal strategy** for every student — providing incentive guarantees even though the mechanism is not fully strategy-proof. This represents a theoretical advance beyond the efficiency-stability frontier.

### England's IA-to-DA Transition (Terrier, Pathak, Ren, 2026)

Using England's 2008 ban of immediate acceptance as a natural experiment, this paper found that switching to DA **reduced school quality for low-SES students more than high-SES students** — a counterintuitive and cautionary finding for mechanism designers (see §8.4).

### Smart Matching Platforms (Neilson et al., 2022, *QJE*)

Demonstrated that platforms providing live feedback on admissions chances change application behavior, raise placement rates by 58%, and cause students to enroll in higher-quality schools.

### EADAM Experimental Validation (Cerrone, Hermstruewer, Kesten, 2024)

Experimentally validated EADAM — students consent to waive priorities that don't affect their own assignments, enabling efficiency improvements for others. The **Flemish Ministry of Education (Belgium)** is implementing this in practice.

### AI and Algorithmic Bias in Admissions (2025)

Research examined how ML models in educational admissions can perpetuate societal injustices by relying on historical data, particularly in the post-affirmative action landscape following the U.S. Supreme Court's 2023 ruling.

---

## 11. Summary: Algorithm Comparison Table

| Mechanism | Stable? | Strategy-Proof? | Pareto-Efficient? | Favors Students? | Used In Practice? |
|-----------|---------|-----------------|-------------------|-------------------|-------------------|
| DA (student-proposing) | Yes | Yes (for students) | No (with ties) | Yes (among stable) | NYC, Boston, NRMP |
| DA (school-proposing) | Yes | Yes (for schools) | No | No | Original NRMP (1952-97) |
| TTC | No | Yes | Yes | Yes | New Orleans (briefly) |
| Boston/IA | No | No | Possible (in eqm) | Depends on strategy | Boston (pre-2005), China (some provinces) |
| EADAM | Weakly | No (hard to exploit) | Better than DA | Yes | Flanders, Belgium |
| Serial Dictatorship | No | Yes | Yes | Depends on order | Some lotteries |
| Hungarian | N/A (weighted) | N/A | Optimal total weight | N/A | Operations research |
| Stable Improvement Cycles | Yes | No | Better than DA | Yes | Proposed for NYC |

---

## 12. References

### Foundational Papers

- Gale, D. and Shapley, L.S. (1962). "College Admissions and the Stability of Marriage." *American Mathematical Monthly*, 69(1): 9-15.
- Shapley, L. and Scarf, H. (1974). "On Cores and Indivisibility." *Journal of Mathematical Economics*, 1: 23-37.
- Roth, A.E. (1982). "The Economics of Matching: Stability and Incentives." *Mathematics of Operations Research*, 7(4): 617-628.
- Roth, A.E. (1984). "The Evolution of the Labor Market for Medical Interns and Residents." *Journal of Political Economy*, 92(6): 991-1016.
- Roth, A.E. (1986). "On the Allocation of Residents to Rural Hospitals." *Journal of Economic Theory*, 36: 277-288.

### School Choice Design

- Abdulkadiroğlu, A. and Sönmez, T. (2003). "School Choice: A Mechanism Design Approach." *American Economic Review*, 93(3): 729-747.
- Abdulkadiroğlu, A., Pathak, P.A., and Roth, A.E. (2005). "The New York City High School Match." *American Economic Review P&P*, 95(2): 364-367.
- Abdulkadiroğlu, A., Pathak, P.A., and Roth, A.E. (2009). "Strategy-Proofness versus Efficiency in Matching with Indifferences." *American Economic Review*, 99(5): 1954-1978.
- Erdil, A. and Ergin, H. (2008). "What's the Matter with Tie-Breaking?" *American Economic Review*, 98(3): 669-689.
- Kesten, O. (2010). "School Choice with Consent." *Quarterly Journal of Economics*, 125(3): 1297-1348.
- Ergin, H. (2002). "Efficient Resource Allocation on the Basis of Priorities." *Econometrica*, 70(6): 2489-2497.

### Nobel Prize Materials

- Nobel Prize Committee (2012). "Stable Allocations and the Practice of Market Design" — Scientific Background.
- Nobel Prize Committee (2012). "Stable matching: Theory, evidence, and practical design" — Popular Science Background.

### School Choice Mechanisms (Practice)

- Abdulkadiroğlu, A., Pathak, P.A., Roth, A.E., and Sönmez, T. (2006). "Changing the Boston School Choice Mechanism." NBER Working Paper 11965.
- Roth, A.E. and Peranson, E. (1999). "The Redesign of the Matching Market for American Physicians." *American Economic Review*, 89(4): 748-780.
- Balinski, M. and Sönmez, T. (1999). "A Tale of Two Mechanisms: Student Placement." *Journal of Economic Theory*, 84: 73-94.
- Alcalde, J. and Barberà, S. (1994). "Top Dominance and the Possibility of Strategy-Proof Stable Solutions." *Economic Theory*, 4: 417-435.

### Equity and Limitations

- Terrier, C., Pathak, P.A., and Ren, K. (2026). "From Immediate Acceptance to Deferred Acceptance: Effects on School Admissions and Achievement in England." *AEJ: Applied Economics*, 18(1): 44-87.
- Arteaga, F., Kapor, A., Neilson, C., and Zimmerman, S. (2022). "Smart Matching Platforms and Heterogeneous Beliefs in Centralized School Choice." *Quarterly Journal of Economics*, 137(3): 1791-1848.
- Kojima, F. (2012). "The Rural Hospital Theorem Revisited." *International Journal of Economic Theory*, 8(1): 67-76.

### Recent Works

- Reny, P. (2022). "Efficient Matching in the School Choice Problem." *American Economic Review*, 112(6): 2025-2043.
- Cerrone, C., Hermstrüwer, Y., and Kesten, O. (2024). "School Choice with Consent." *Economic Journal*.
- Rodriguez-Alvarez, C. and Romero-Medina, A. (2024). "School Choice with Transferable Characteristics." *Games and Economic Behavior*.
- Afacan, M.O., Dur, U., and Van der Linden, M. (2024). "Capacity Design in School Choice." *Games and Economic Behavior*.
- Akchurin, M. and Chouhy, C. (2024). "Algorithmic Fairness in School Choice." *Qualitative Sociology*.
- Gutin, G. et al. (2025). "Efficient Stable Matching Under Acyclicity." *Economics Letters*.
- Abdulkadiroğlu, A. and Andersson, T. (2022). "School Choice." NBER Working Paper 29822 (revised Dec 2025).

---

*Research compiled March 2026. This document covers the theoretical foundations, practical applications, and recent developments in optimal matching algorithms with a focus on educational market applications and student welfare optimization.*
