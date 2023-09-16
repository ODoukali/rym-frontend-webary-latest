import { Box } from "@mui/material";
import { useEffect, useReducer } from "react";
import TagCloud from "react-tag-cloud";

const TagsCloud = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setInterval(() => {
      forceUpdate();
    }, 5000);
  }, [forceUpdate]);

  return (
    <Box
      height="700px"
      borderRadius="40px"
      sx={{
        backgroundImage: "linear-gradient(to bottom, transparent,#ffffff 100%)",
      }}
    >
      <div className="tagCloud-outer">
        <TagCloud
          className="tagCloud"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            padding: 8,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            text="Premarital counseling"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.5" }}
          >
            Premarital counseling
          </div>
          <div
            text="Relationship maintenance"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.25" }}
          >
            Relationship maintenance
          </div>
          <div
            text="Marriage enrichment"
            className="hovered"
            style={{ fontSize: 26 }}
          >
            Marriage enrichment
          </div>
          <div
            text="Skills"
            className="hovered"
            style={{ fontSize: 25, opacity: "0.75" }}
          >
            Skills
          </div>
          <div text="Growth" className="hovered" style={{ fontSize: 35 }}>
            Growth
          </div>
          <div text="Conflict" className="hovered" style={{ fontSize: 40 }}>
            Conflict
          </div>
          <div
            text="Understanding"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.5" }}
          >
            Understanding
          </div>
          <div
            text="Marriage"
            className="hovered"
            rotate={90}
            style={{ fontSize: 25 }}
          >
            Marriage
          </div>
          <div
            text="Problem-solving"
            className="hovered"
            style={{ fontSize: 20, opacity: "0.75" }}
          >
            Problem-solving
          </div>
          <div
            text="Strengthening"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.25" }}
          >
            Strengthening
          </div>
          <div text="Emotional" className="hovered" style={{ fontSize: 50 }}>
            Emotional
          </div>
          <div
            text="Coping skills"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.5" }}
          >
            Coping skills
          </div>
          <div
            text="Relationship"
            className="hovered"
            style={{ fontSize: 25, opacity: "0.75" }}
          >
            Relationship
          </div>
          <div text="Love" className="hovered" style={{ fontSize: 50 }}>
            Love
          </div>
          <div
            text="Intimacy"
            className="hovered"
            style={{ fontSize: 26, opacity: "0.75" }}
          >
            Intimacy
          </div>
          <div
            text="Therapy"
            className="hovered"
            rotate={90}
            style={{ fontSize: 50 }}
          >
            Therapy
          </div>
          <div
            text="Family"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.5" }}
          >
            Family
          </div>
          <div
            text="Trust-buildingi"
            className="hovered"
            style={{ fontSize: 20, opacity: "0.75" }}
          >
            Trust-building
          </div>
          <div
            text="Active listeningi"
            className="hovered"
            style={{ fontSize: 20, opacity: "0.75" }}
          >
            Active listening
          </div>
          <div
            text="Communication"
            className="hovered"
            style={{ fontSize: 70 }}
          >
            Communication
          </div>
          <div text="Repair" className="hovered" style={{ fontSize: 40 }}>
            Repair
          </div>
          <div text="Support" className="hovered" style={{ fontSize: 50 }}>
            Support
          </div>
          <div
            text="Healing"
            className="hovered"
            rotate={90}
            style={{ fontSize: 50 }}
          >
            Healing
          </div>
          <div
            text="Skillsi"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.5" }}
          >
            Skills
          </div>
          <div text="Connection" className="hovered" style={{ fontSize: 25 }}>
            Connection
          </div>
          <div text="Trust" className="hovered" style={{ fontSize: 50 }}>
            Trust
          </div>
          <div
            text="Emotional support"
            className="hovered"
            style={{ fontSize: 25, opacity: "0.75" }}
          >
            Emotional support
          </div>
          <div text="Couple" className="hovered" style={{ fontSize: 35 }}>
            Couple
          </div>
          <div
            text="Marriage advice"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.25" }}
          >
            Marriage advice
          </div>
          <div
            text="Relationship goals"
            className="hovered"
            style={{ fontSize: 20, opacity: "0.75" }}
          >
            Relationship goals
          </div>
          <div
            text="Commitment"
            className="hovered"
            rotate={90}
            style={{ fontSize: 25, opacity: "0.75" }}
          >
            Commitment
          </div>
          <div
            text="Resolving conflicts"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.5" }}
          >
            Resolving conflicts
          </div>
          <div
            text="Premarital counselingi"
            className="hovered"
            style={{ fontSize: 26, opacity: "0.75" }}
          >
            Premarital counseling
          </div>
          <div
            text="Relationship dynamics"
            className="hovered"
            style={{ fontSize: 26, opacity: "0.75" }}
          >
            Relationship dynamics
          </div>
          <div
            text="Trust-building"
            className="hovered"
            style={{ fontSize: 40 }}
          >
            Trust-building
          </div>
          <div
            text="Active listening"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.5" }}
          >
            Active listening
          </div>
          <div
            text="Relationship counseling"
            className="hovered"
            style={{ fontSize: 15, opacity: "0.25" }}
          >
            Relationship counseling
          </div>
        </TagCloud>
      </div>
    </Box>
  );
};

export default TagsCloud;
