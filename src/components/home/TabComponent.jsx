import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Tab.css";
import { Submission } from "./Submission";

export const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="w-75 margin-b">
        <Tabs
          id="justify-tab-example"
          className="mb-3"
          justify
          activeKey={activeTab}
          onSelect={handleTabChange}
        >
          <Tab eventKey="submission" title="Submission">
            <Submission/>
          </Tab>
          <Tab eventKey="instructions" title="Instructions">
            Tab content for Instructions
          </Tab>
          <Tab eventKey="output-format" title="Output format">
            Tab content for Output format
          </Tab>
          <Tab eventKey="motif-viewer" title="Motif viewer">
            Tab content for Motif viewer
          </Tab>
          <Tab eventKey="abstract" title="Abstract">
            Tab content for Abstract
          </Tab>
          <Tab eventKey="version-history" title="Version history">
            Tab content for Version history
          </Tab>
          <Tab eventKey="downloads" title="Downloads">
            Tab content for Downloads
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
