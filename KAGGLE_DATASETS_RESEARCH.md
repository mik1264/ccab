# Kaggle Datasets: Stable Matching & Educational Markets

*Research compiled March 2026. Companion to OPTIMAL_MATCHING_RESEARCH.md.*

---

## Key Finding

There is no single "ideal" stable matching dataset on Kaggle. Individual-level rank order lists from NYC/Boston school choice are restricted to IRB-approved researchers; NRMP residency match data is explicitly prohibited from ML use. However, several datasets are well-suited as inputs for stable matching simulations, analysis, and visualization.

---

## Tier 1 — Real Centralized Matching Data (Best Fit)

India's JOSAA system runs actual Gale-Shapley deferred acceptance and publishes opening/closing ranks per round per institute — the closest thing to real DA output available publicly.

### JoSAA Opening and Closing Rank Dataset (2021–2024)
- **URL:** https://www.kaggle.com/datasets/rahulkumarnitw/josaa-opening-and-closing-rank-dataset-2024
- **Size:** 3.8 MB, 8 Excel files (one per round per year)
- **Years:** 2021–2024, Rounds 1–6
- **Columns:** Year, Round, Institute (IITs/NITs/IIITs/GFTIs), Academic Program Name, Quota (AI/HS/OS/JK/LA/GO), Seat Type (Open/OBC-NCL/SC/ST/EWS), Gender, Opening Rank, Closing Rank
- **Engagement:** 3,977 views, 834 downloads, 10 likes
- **Stable Matching Use:** OR/CR data directly encodes DA allocation outcomes per round. Can reconstruct which students (by rank band) match to which programs in each round, simulate preference orderings, and study how quota constraints affect stability.

### IIT Seat Allocation Data (2016–2024)
- **URL:** https://www.kaggle.com/datasets/breadnbu22er/or-cr-2016-to-2024
- **Size:** 234 KB zip, 9 years of data
- **Columns:** Institute, Academic Program Name, Quota, Seat Type, Gender, Year, Opening Rank, Closing Rank, Round
- **Engagement:** 7,547 views, 1,204 downloads, 30 likes
- **Stable Matching Use:** IIT-only, longer historical span. Excellent for studying how cutoffs shift across years and rounds — directly equivalent to analyzing stability of a centralized matching over time.

### JOSAA Engineering Schools Seat Allocation (JEE)
- **URL:** https://www.kaggle.com/datasets/divyanshukunwar/josaa-engineering-schools-seat-allocation-jee
- **Size:** 3.31 MB zip
- **Columns:** Institute, Program, Quota, Seat Type, Gender, Opening/Closing Rank, Round
- **Engagement:** 4,985 views, 1,009 downloads, 34 likes
- **Stable Matching Use:** Cross-institute comparison across IITs, NITs, IIITs. Supports rank-to-college prediction, branch preference analysis, and multi-round matching simulation.

### IIT Admissions Dataset — 200,000 Students
- **URL:** https://www.kaggle.com/datasets/goyaladi/iit-admissions-dataset
- **Size:** 200,000 student records
- **Columns:** Field of study, specialization, fees, discounts, academic backgrounds, applicant preferences
- **Engagement:** 20,097 views, 4,072 downloads, 75 likes
- **Stable Matching Use:** Student-side data complementing the OR/CR datasets above; supports building two-sided preference models.

---

## Tier 2 — US College Admissions (Institutional Level)

No individual student preference lists — useful for constructing preference proxies.

### Elite College Admissions (Chetty et al. 2023, Opportunity Insights)
- **URL:** https://www.kaggle.com/datasets/mexwell/elite-college-admissions
- **Size:** 371 KB, ~1,807 rows (139 colleges × 13 income brackets)
- **Columns:** College tier (Ivy Plus/other elite/highly selective/selective), attendance rate (raw and SAT-reweighted), application rate, relative attendance conditional on application, income percentile bins (13 brackets from 70th to 99.9th), SAT/ACT bands, post-college outcomes (earnings, grad school, employment)
- **Engagement:** 8,711 views, 1,344 downloads, 32 likes
- **Stable Matching Use:** Reveals income-stratified revealed preferences — essentially college-side "admission preferences" by student type. Shows how income inequality in admissions relates to matching stability. Most interesting for welfare/equity analysis.

### US Dept of Education College Scorecard
- **URL:** https://www.kaggle.com/datasets/kaggle/college-scorecard
- **Size:** 590 MB, multi-year CSV + SQLite
- **Columns:** Hundreds of variables per institution including SAT/ACT scores, acceptance rates, graduation rates, post-graduation earnings (via IRS tax records), federal financial aid metrics, demographic breakdowns, field-of-study outcomes
- **Engagement:** 183,361 views, 27,216 downloads, 250 likes
- **Stable Matching Use:** Most comprehensive US higher education dataset. Multi-year preference models, capacity constraints, and student qualification thresholds for full Gale-Shapley simulations. Data from 1997 onward.

### US College Data (ISLR, 777 colleges, 1995)
- **URL:** https://www.kaggle.com/datasets/yashgpt/us-college-data
- **Size:** 32 KB, 777 rows, 18 columns
- **Columns:** Private (Y/N), Apps, Accept, Enroll, Top10perc, Top25perc, F.Undergrad, P.Undergrad, Outstate tuition, Room.Board, Books, Personal, PhD%, Terminal%, S.F.Ratio, perc.alumni, Expend, Grad.Rate
- **Engagement:** 52,647 views, 6,666 downloads, 53 likes
- **Stable Matching Use:** Classic ISLR dataset. Accept/Enroll rates → school capacity/selectivity proxies. Top10/25perc → student quality thresholds. Sufficient for stylized Gale-Shapley simulations.

### 2022 USA Undergrad College Rankings
- **URL:** https://www.kaggle.com/datasets/neelgajare/2022-usa-college-rankings-more
- **Size:** 392 universities, 17 US News academic quality indicators
- **Columns:** Ranking, University Name, Tuition, Enrollment + quality indicators
- **Engagement:** 13,751 views, 1,749 downloads, 33 likes

### American University Data (IPEDS)
- **URL:** https://www.kaggle.com/datasets/sumithbhongale/american-university-data-ipeds-dataset
- **Size:** 1.23 MB zip
- **Columns:** SAT/ACT scores, demographics (ethnicity, immigration status, gender), enrollment rates, graduation rates, institutional costs
- **Engagement:** 55,530 views, 6,094 downloads, 58 likes

---

## Tier 3 — Graduate Admissions (Student Level)

### Graduate Admissions 2 (Mohan Acharya Dataset)
- **URL:** https://www.kaggle.com/datasets/mohansacharya/graduate-admissions
- **Size:** ~500 records
- **Columns:** GRE Score (out of 340), TOEFL Score (out of 120), University Rating (1–5), SOP strength (1–5), LOR strength (1–5), Undergraduate GPA (out of 10), Research Experience (binary), Chance of Admit (0–1)
- **Engagement:** 726,835 views, 127,200 downloads, 1,942 likes — **most popular admissions dataset on Kaggle**
- **Stable Matching Use:** "University Rating" and "Chance of Admit" can proxy student-university matching preferences. Small (500 records) but very widely used baseline.

---

## Tier 4 — University Rankings (Preference Proxies)

### World University Rankings (THE, ARWU, CWUR combined)
- **URL:** https://www.kaggle.com/datasets/mylesoneill/world-university-rankings
- **Size:** 1.48 MB
- **Columns:** Rankings from Times Higher Education, Shanghai ARWU, and CWUR; plus World Bank/UNESCO education attainment and NCES expenditure data
- **Engagement:** 546,177 views, 101,418 downloads, 1,151 likes
- **Stable Matching Use:** Three ranking systems for global universities. Useful for constructing international student preference lists ordered by tier.

### QS World University Rankings 2024
- **URL:** https://www.kaggle.com/datasets/joebeachcapital/qs-world-university-rankings-2024
- **Size:** 71 KB, 1,500 institutions across 104 countries
- **Columns:** QS rank, institution, location, 17 indicators including 2024 additions: Sustainability, Employment Outcomes, International Research Network
- **Engagement:** 17,135 views, 3,547 downloads, 54 likes

---

## Tier 5 — NYC / US K-12 Schools

### Average SAT Scores for NYC Public Schools
- **URL:** https://www.kaggle.com/datasets/nycopendata/high-schools
- **Size:** 25 KB, ~300–400 NYC high schools (2014–2015)
- **Columns:** School name, borough, building code, address, lat/long, total enrollment, racial/ethnic breakdown, average SAT scores by section
- **Engagement:** 56,365 views, 7,328 downloads, 92 likes
- **Stable Matching Use:** School-side data for NYC's famous DA high school match. SAT averages → school quality/selectivity; enrollment → capacity constraint. Individual student preference data is restricted to researchers.

### US Schools Dataset (130,000+ schools, HIFLD)
- **URL:** https://www.kaggle.com/datasets/andrewmvd/us-schools-dataset
- **Size:** 15.4 MB, 130,000+ schools
- **Columns:** School names, addresses, geographic coordinates, public/private classification
- **Engagement:** 36,682 views, 4,585 downloads, 50 likes
- **Stable Matching Use:** Geographic supply-side data for distance-based preference modeling. Useful for proximity-preference school choice models.

### High School Student Performance and Demographics (Portugal)
- **URL:** https://www.kaggle.com/datasets/dillonmyrick/high-school-student-performance-and-demographics
- **Size:** 24.6 KB, 382 students, 33 columns
- **Columns:** School, sex, age, address, family size/education/occupation, **reason for choosing school** (home/reputation/course/other), travel time, study time, grades (3 periods), absences, social/health factors
- **Engagement:** 50,558 views, 10,642 downloads, 113 likes
- **Notable:** The "reason" column is a rare explicit preference signal in publicly available school choice data.

---

## Tier 6 — Medical / Organ Allocation

### Kidney Transplant Waitlist Brazil
- **URL:** https://www.kaggle.com/datasets/gustavomodelli/waitlist-kidney-brazil
- **Size:** 2.1 MB, patients 2000–2017, São Paulo State
- **Scoring:** HLA-DR matching (0MM=10pts, 1MM=5pts, 2MM=0pts), HLA-B (0MM=4pts), HLA-A (0MM=1pt), tiebreakers: waiting time, cPRA > 50%, diabetes, age < 18
- **Engagement:** 7,419 views, 758 downloads, 16 likes
- **Stable Matching Use:** Real-world scoring-based allocation mechanism. Priority-based rather than preference-list-based, but directly analogous to stable matching allocation. Relevant to Roth's kidney exchange work (also Nobel 2012).

---

## Tier 7 — Labor Market / Skills Matching

### Industry-Education Skills Matching Dataset
- **URL:** https://www.kaggle.com/datasets/programmer3/industry-education-skills-matching-dataset
- **Size:** 905 KB, 5,000 rows
- **Columns:** 10 technical skills (Programming, Data Analysis, ML, Cloud Computing, Web Dev, Cybersecurity, DevOps, Mobile Dev, IoT, AI Programming), 7 soft skills, Job Category, Course Type
- **Engagement:** 399 views, 46 downloads, 1 like
- **Stable Matching Use:** Maps job categories to educational course types via skill overlap — a bipartite matching problem where weight = skill alignment.

---

## What Does NOT Exist on Kaggle

| Data | Reason unavailable |
|---|---|
| NYC/Boston student rank order lists | Restricted to IRB-approved researchers |
| NRMP residency match individual data | Explicitly prohibited from ML use by NRMP |
| China Gaokao individual preferences | Available on cnopendata.com/GitHub, not Kaggle |
| UK UCAS individual student applications | UCAS publishes aggregate statistics only |
| Any large two-sided explicit preference lists | No centralized match publishes this publicly |

---

## Recommended Combinations for Demo Enhancement

| Use case | Datasets |
|---|---|
| Real DA round animation | JOSAA OR/CR (2021–2024) |
| US equity/welfare analysis | Chetty Elite Admissions + College Scorecard |
| Global school choice | QS Rankings 2024 + World University Rankings |
| NYC-style simulation | NYC High Schools SAT + US Schools Dataset |
| Graduate admissions | Graduate Admissions 2 (popular baseline) |
| Medical matching (Roth) | Kidney Waitlist Brazil |

---

*See also: OPTIMAL_MATCHING_RESEARCH.md for the theoretical foundations, algorithms, and real-world applications that these datasets support.*
