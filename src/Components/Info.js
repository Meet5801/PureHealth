import React from "react";
import InformationCard from "./InformationCard";
import {  faBaby, faBrain, faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Our Services</span>
        </h3>
        <p className="info-description">
        "We deliver healthcare at your convenience with a wide array of on-demand medical services designed to meet your needs. Through our platform, you can connect with seasoned online doctors for professional medical advice, obtain online prescriptions, and receive prompt refills whenever necessary."
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Pediatrics"
          description="Our comprehensive Dental Care services address all aspects of your oral health. From routine check-ups and cleanings to advanced cosmetic and restorative procedures, our skilled dentists help you maintain a bright and healthy smile."
          icon={faBaby}
        />

        <InformationCard
          title="Mental Health"
          description="Prioritize your mental well-being with our Mental Health services. Our licensed therapists and counselors offer confidential support for a variety of mental health issues, including stress, anxiety, depression, and more, helping you achieve a balanced and healthy mind."
          icon={faBrain}
        />

        <InformationCard
    title="Nutrition and Wellness"
    description="Achieve your health goals with our Nutrition and Wellness services. Our expert nutritionists provide personalized dietary plans and wellness advice, helping you make informed choices for a healthier lifestyle and improved overall well-being."
          icon={faAppleAlt}
        />
      </div>
    </div>
  );
}

export default Info;
