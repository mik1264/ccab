import "./index.css";
import { Composition } from "remotion";
import { StoryLeafIntro } from "./StoryLeafIntro";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="StoryLeafIntro"
        component={StoryLeafIntro}
        durationInFrames={360}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
