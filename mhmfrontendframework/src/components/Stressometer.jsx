import React from "react";
import axios from "axios";
import "./Stressometer.css";
import { useState } from "react";
import { getCSRFToken } from "./authUtils";


import img1 from "../StressImages/anxietylevel.png";
import img2 from "../StressImages/selfesteem.jpg";
import img3 from "../StressImages/mentalhealth.avif";
import img4 from "../StressImages/depression1.jpg";
import img5 from "../StressImages/headache.webp";
import img6 from "../StressImages/bloodpressure.webp";
import img7 from "../StressImages/sleepquality.jpg";
import img8 from "../StressImages/breathingproblem.avif";
import img9 from "../StressImages/noise.jpg";
import img10 from "../StressImages/livingcondition.jpg";
import img11 from "../StressImages/safety.avif";
import img12 from "../StressImages/basicneed.jpg";
import img13 from "../StressImages/academicperformance.avif";
import img14 from "../StressImages/studyload.avif";
import img15 from "../StressImages/teacherstudentrelationship.avif";
import img16 from "../StressImages/futurecareer.avif";
import img17 from "../StressImages/socialsupport.avif";
import img18 from "../StressImages/peerpressure.avif";
import img19 from "../StressImages/extraactivity.avif";
import img20 from "../StressImages/bullying.avif";

const api_url = "http://127.0.0.1:8000/api/stressometer/predict/";
const Stressometer = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formValues, setFormValues] = useState({
    anxiety_level: "",
    self_esteem: "",
    mental_health_history: "",
    depression: "",
    headache: "",
    blood_pressure: "",
    sleep_quality: "",
    breathing_problem: "",
    noise_level: "",
    living_conditions: "",
    safety: "",
    basic_needs: "",
    academic_performance: "",
    study_load: "",
    teacher_student_relationship: "",
    future_career_concerns: "",
    social_support: "",
    peer_pressure: "",
    extracurricular_activities: "",
    bullying: "",
  });
  const totalSteps = 20;
  const [result, setResult] = useState(null);

  // const handleChange = (event) => {
  //     setFormData({...formData,[event.target.name]:event.target.value});
  // }
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };
  const handleChange = (event) => {
    const { name, value, min, max } = event.target;
    let parsedValue;

    if (value === "") {
      parsedValue = "";
    } else {
      parsedValue = Math.max(Number(min), Math.min(Number(max), Number(value)));
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: parsedValue,
    }));
  };
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const getAuthToken = () =>{
    return localStorage.getItem('token');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(api_url, formValues,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Token ${getAuthToken()}`,
            'X-CSRFToken': getCSRFToken(),
        }
      }
      );
      setResult(response.data);
      console.log("Prediction:", response.data.result);
    } catch (e) {
      console.log(e);
    }
  };
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="poschange">
            <label htmlFor="anxiety_level" className="form-label">
              <img
                src={img1}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              />
            </label>
            <input
              style={{ border: "solid 2px", width: "100%" }}
              placeholder="Anxiety level(1-22)"
              type="number"
              id="anxiety_level"
              name="anxiety_level"
              value={formValues.anxiety_level}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={22}
            />
            <p className="txtclr">
              Anxiety is a common mental health condition characterized by
              feelings of unease, worry, and fear. Check you anxiety level
              <a
                href="https://www.hiv.uw.edu/page/mental-health-screening/gad-7"
                target="_blank"
                style={{ color: "yellow" }}
              >
                Here
              </a>
              .
            </p>
          </div>
        );

      case 2:
        return (
          <div>
            <label htmlFor="self_esteem" className="form-label">
              <img
                src={img2}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Self Esteem(0-31)"
              type="number"
              id="self_esteem"
              name="self_esteem"
              value={formValues.self_esteem}
              onChange={handleChange}
              className="form-control"
              min={0}
              max={31}
            />
            {/* <p className="txtclr">Self-esteem refers to the overall opinion and perception one has of oneself. It is the subjective evaluation of our own worth, capabilities, and value as individuals.A healthy level of self-esteem is vital for personal well-being and success in various aspects of life. When someone possesses high self-esteem, they tend to have a positive self-image, confidence in their abilities, and a belief in their own worth.</p> */}
            <p className="txtclr">
              Self-esteem refers to the overall opinion and perception one has
              of oneself. It is the subjective evaluation of our own worth,
              capabilities, and value as individuals.
              <a
                href="https://wwnorton.com/college/psych/psychsci/media/rosenberg.htm"
                target="_blank"
                style={{ color: "yellow" }}
              >
                Here
              </a>
              .
            </p>
          </div>
        );
      case 3:
        return (
          <div>
            <label htmlFor="mental_health_history" className="form-label">
              <img
                src={img3}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Mental Health History(0-1)"
              type="number"
              id="mental_health_history"
              name="mental_health_history"
              value={formValues.mental_health_history}
              onChange={handleChange}
              className="form-control"
              min={0}
              max={1}
            />
            {/* <p className="txtclr">Mental health history refers to an individual's personal journey and experiences with mental well-being and any related conditions or challenges they have encountered. It encompasses the range of mental health issues, diagnoses, and treatments that a person has gone through.It may include instances of anxiety, depression, trauma, addiction, or other mental health conditions that an individual has faced.</p> */}
            <p className="txtclr">
              Mental health history refers to an individual's personal journey
              and experiences with mental well-being and any related conditions
              or challenges they have encountered.
            </p>
          </div>
        );
      case 4:
        return (
          <div>
            <label htmlFor="depression" className="form-label">
              <img
                src={img4}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Depression(0-28)"
              type="number"
              id="depression"
              name="depression"
              value={formValues.depression}
              onChange={handleChange}
              className="form-control"
              min={0}
              max={28}
            />
            {/* <p className="txtclr">Depression is a mental health disorder characterized by persistent feelings of sadness, hopelessness, and a loss of interest or pleasure in activities. It goes beyond normal fluctuations in mood and can significantly impact a person's daily life, relationships, and overall well-being. Individuals with depression may experience a range of symptoms, including persistent low mood, changes in appetite and sleep patterns, fatigue, difficulty concentrating, feelings of guilt or worthlessness, and even thoughts of self-harm or suicide.</p> */}
            <p className="txtclr">
              Depression is a mental health disorder characterized by persistent
              feelings of sadness, hopelessness, and a loss of interest or
              pleasure in activities.
              <a href="/" style={{ color: "yellow" }}>
                Here
              </a>
              .
            </p>
          </div>
        );
      case 5:
        return (
          <div>
            <label htmlFor="headache" className="form-label">
              <img
                src={img5}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Headache(0-5)"
              type="number"
              id="headache"
              name="headache"
              value={formValues.headache}
              onChange={handleChange}
              className="form-control"
              min={0}
              max={5}
            />
            {/* <p className="txtclr">A headache is a common condition characterized by pain or discomfort in the head or neck region. It is one of the most prevalent health complaints and can range from mild to severe in intensity. Headaches can be caused by various factors, including tension, stress, sinus congestion, hormonal changes, dehydration, certain foods or drinks, lack of sleep, or underlying medical conditions. The symptoms and duration of headaches can vary from person to person. Common types of headaches include tension headaches, migraines, and cluster headaches.n</p> */}
            <p className="txtclr">
              A headache is a common condition characterized by pain or
              discomfort in the head or neck region. It is one of the most
              prevalent health complaints and can range from mild to severe in
              intensity.
            </p>
          </div>
        );
      case 6:
        return (
          <div>
            <label htmlFor="blood_pressure" className="form-label">
              <img
                src={img6}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Blood Pressure(1-3)"
              type="number"
              id="blood_pressure"
              name="blood_pressure"
              value={formValues.blood_pressure}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={3}
            />
            {/* <p className="txtclr">Blood pressure refers to the force exerted by circulating blood against the walls of blood vessels. It is an essential measure of cardiovascular health. Blood pressure is typically recorded as two numbers: systolic pressure (the higher number) and diastolic pressure (the lower number). Systolic pressure represents the force when the heart contracts and pumps blood, while diastolic pressure represents the force when the heart is at rest between beats. Normal blood pressure is generally considered to be around 120/80 mmHg. High blood pressure, or hypertension, occurs when the force exerted against the blood vessel walls is consistently too high. It is a significant risk factor for various health conditions, including heart disease, stroke, and kidney problems.</p> */}
            <p className="txtclr">
              Blood pressure refers to the force exerted by circulating blood
              against the walls of blood vessels. It is an essential measure of
              cardiovascular health.
            </p>
          </div>
        );
      case 7:
        return (
          <div>
            <label htmlFor="sleep_quality" className="form-label">
              <img
                src={img7}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Sleep quality(1-5)"
              type="number"
              id="sleep_quality"
              name="sleep_quality"
              value={formValues.sleep_quality}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Sleep quality refers to the overall effectiveness and restfulness of one's sleep. It is not solely determined by the duration of sleep but also by various factors that contribute to a deep, restorative sleep experience. Good sleep quality is characterized by falling asleep relatively quickly, staying asleep throughout the night without frequent awakenings, and waking up feeling refreshed and energized. On the other hand, poor sleep quality can result in difficulties falling asleep, frequent awakenings, shallow or restless sleep, and waking up feeling tired or groggy.</p> */}
            <p className="txtclr">
              Sleep quality refers to the overall effectiveness and restfulness
              of one's sleep.
              <a
                href="http://www.stopbang.ca/patient/screening.php"
                style={{ color: "yellow" }}
              >
                Here
              </a>
            </p>
          </div>
        );
      case 8:
        return (
          <div>
            <label htmlFor="breathing_problem" className="form-label">
              <img
                src={img8}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Breathing Problem(1-5)"
              type="number"
              id="breathing_problem"
              name="breathing_problem"
              value={formValues.breathing_problem}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Breathing problems refer to difficulties or abnormalities in the process of inhaling and exhaling air. They can manifest in various ways and have different causes. Common breathing problems include shortness of breath, wheezing, coughing, or a feeling of tightness in the chest. Breathing problems can be caused by a range of factors, including respiratory infections, allergies, asthma, chronic obstructive pulmonary disease (COPD), anxiety or panic disorders, obesity, lung diseases, or even certain medications.</p> */}
            <p className="txtclr">
              Breathing problems refer to difficulties or abnormalities in the
              process of inhaling and exhaling air.
            </p>
          </div>
        );
      case 9:
        return (
          <div>
            <label htmlFor="noise_level" className="form-label">
              <img
                src={img9}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Noise level(1-5)"
              type="number"
              id="noise_level"
              name="noise_level"
              value={formValues.noise_level}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Noise level refers to the intensity or volume of sound in a particular environment. It is measured in decibels (dB) and can have varying effects on individuals depending on their sensitivity and duration of exposure. High noise levels can be detrimental to health and well-being. Prolonged exposure to loud noises can lead to hearing loss, stress, sleep disturbances, decreased concentration, and increased irritability. </p> */}
            <p className="txtclr">
              Noise level refers to the intensity or volume of sound in a
              particular environment.
            </p>
          </div>
        );

      case 10:
        return (
          <div>
            <label htmlFor="living_conditions" className="form-label">
              <img
                src={img10}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "1005",
                onClick: "noChange",
              }}
              placeholder="Living Conditions(1-5)"
              type="number"
              id="living_conditions"
              name="living_conditions"
              value={formValues.living_conditions}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Living conditions refer to the overall quality and standards of the physical, social, and environmental aspects in which individuals reside. It encompasses various factors, including housing, sanitation, access to clean water, safety, infrastructure, and community resources. Living conditions greatly impact one's quality of life, health, and well-being.</p> */}
            <p className="txtclr">
              Living conditions refer to the overall quality and standards of
              the physical, social, and environmental aspects in which
              individuals reside.
            </p>
          </div>
        );
      case 11:
        return (
          <div>
            <label htmlFor="safety" className="form-label">
              <img
                src={img11}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Safety(1-5)"
              type="number"
              id="safety"
              name="safety"
              value={formValues.safety}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Safety refers to the state of being free from harm, danger, or risk. It encompasses various aspects of personal, physical, and psychological well-being. Safety can be achieved through proactive measures and precautions that minimize the likelihood of accidents, injuries, or adverse events. This includes practices such as maintaining a safe and secure physical environment, adhering to traffic and road safety rules, using protective equipment when necessary, practicing proper hygiene and sanitation, and being mindful of potential hazards.</p> */}
            <p className="txtclr">
              Safety refers to the state of being free from harm, danger, or
              risk. It encompasses various aspects of personal, physical, and
              psychological well-being.
            </p>
          </div>
        );
      case 12:
        return (
          <div>
            <label htmlFor="basic_needs" className="form-label">
              <img
                src={img12}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Basic Needs(1-5)"
              type="number"
              id="basic_needs"
              name="basic_needs"
              value={formValues.basic_needs}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">These needs typically include access to clean air, water, and nutritious food to sustain physical health. Adequate shelter and clothing provide protection from the elements and ensure a safe living environment.</p> */}
            <p className="txtclr">
              These needs typically include access to clean air, water, and
              nutritious food to sustain physical health.
            </p>
          </div>
        );
      case 13:
        return (
          <div>
            <label htmlFor="academic_performance" className="form-label">
              <img
                src={img13}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Academice Performance(1-5)"
              type="number"
              id="academic_performance"
              name="academic_performance"
              value={formValues.academic_performance}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Academic performance refers to the level of achievement and success that an individual demonstrates in their educational pursuits. It encompasses various factors, including grades, test scores, class participation, assignments, and overall knowledge acquisition. Academic performance is often used as an indicator to assess a student's understanding, progress, and mastery of academic subjects.</p> */}
            <p className="txtclr">
              Academic performance refers to the level of achievement and
              success that an individual demonstrates in their educational
              pursuits.
            </p>
          </div>
        );
      case 14:
        return (
          <div>
            <label htmlFor="study_load" className="form-label">
              <img
                src={img14}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Study Load(1-5)"
              type="number"
              id="study_load"
              name="study_load"
              value={formValues.study_load}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Study load refers to the amount of academic coursework and learning activities that a student is expected to complete within a given period. It represents the volume and intensity of the academic workload placed on a student. Study load can vary depending on the educational level, program, and individual circumstances. It includes attending lectures, participating in discussions, conducting research, completing assignments, preparing for exams, and engaging in independent study.</p> */}
            <p className="txtclr">
              Study load refers to the amount of academic coursework and
              learning activities that a student is expected to complete within
              a given period.
            </p>
          </div>
        );
      case 15:
        return (
          <div>
            <label
              htmlFor="teacher_student_relationship"
              className="form-label"
            >
              <img
                src={img15}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
              }}
              placeholder="Teacher Student Relationship(1-5)"
              type="number"
              id="teacher_student_relationship"
              name="teacher_student_relationship"
              value={formValues.teacher_student_relationship}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">The teacher-student relationship is a crucial and dynamic bond that plays a significant role in education. It involves the interactions, communication, and mutual understanding between a teacher and their students. A positive teacher-student relationship fosters a supportive and conducive learning environment, where students feel comfortable, respected, and valued. </p> */}
            <p className="txtclr">
              The teacher-student relationship is a crucial and dynamic bond
              that plays a significant role in education.
            </p>
          </div>
        );
      case 16:
        return (
          <div>
            <label htmlFor="future_career_concerns" className="form-label">
              <img
                src={img16}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Future Career Concerns(1-5)"
              type="number"
              id="future_career_concerns"
              name="future_career_concerns"
              value={formValues.future_career_concerns}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Future career concerns refer to the apprehensions and considerations individuals have regarding their professional paths and choices. As individuals navigate their education and personal development, they often contemplate the potential implications and outcomes of their career decisions. Common concerns may include uncertainty about job prospects, finding meaningful work, job security, financial stability, work-life balance, and opportunities for growth and advancement.</p> */}
            <p className="txtclr">
              Future career concerns refer to the apprehensions and
              considerations individuals have regarding their professional paths
              and choices.
            </p>
          </div>
        );
      case 17:
        return (
          <div>
            <label htmlFor="social_support" className="form-label">
              <img
                src={img17}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Social Support(1-5)"
              type="number"
              id="social_support"
              name="social_support"
              value={formValues.social_support}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Social support refers to the network of relationships, resources, and emotional assistance that individuals receive from their social connections, such as family, friends, peers, and community. It plays a vital role in promoting well-being, resilience, and overall mental health. Social support can take various forms, including emotional support (providing comfort, understanding, and empathy), informational support (sharing knowledge, advice, and guidance), instrumental support (offering practical assistance or resources), and appraisal support (providing feedback and evaluation).</p> */}
            <p className="txtclr">
              Social support refers to the network of relationships, resources,
              and emotional assistance that individuals receive from their
              social connections, such as family, friends, peers, and community.
            </p>
          </div>
        );
      case 18:
        return (
          <div>
            <label htmlFor="peer_pressure" className="form-label">
              <img
                src={img18}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Peer Pressure(1-5)"
              type="number"
              id="peer_pressure"
              name="peer_pressure"
              value={formValues.peer_pressure}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Peer pressure refers to the influence and impact that individuals within a similar age group or social circle can have on each other's thoughts, behaviors, and decision-making. It is a powerful force that can lead individuals to conform to certain social norms, adopt specific attitudes, and engage in activities that they might not otherwise choose.</p> */}
            <p className="txtclr">
              Peer pressure refers to the influence and impact that individuals
              within a similar age group or social circle can have on each
              other's thoughts, behaviors, and decision-making.
            </p>
          </div>
        );
      case 19:
        return (
          <div>
            <label htmlFor="extracurricular_activities" className="form-label">
              <img
                src={img19}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Extracurricular Activities(1-5)"
              type="number"
              id="extracurricular_activities"
              name="extracurricular_activities"
              value={formValues.extracurricular_activities}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={5}
            />
            {/* <p className="txtclr">Extracurricular activities refer to the activities and pursuits that students engage in outside of their regular academic curriculum. These activities can take various forms, such as sports, arts, clubs, community service, or academic competitions. Participating in extracurricular activities offers numerous benefits to students. It allows them to explore their interests, develop new skills, and discover hidden talents.</p> */}
            <p className="txtclr">
              Extracurricular activities refer to the activities and pursuits
              that students engage in outside of their regular academic
              curriculum.
            </p>
          </div>
        );
      case 20:
        return (
          <div>
            <label htmlFor="bullying" className="form-label">
              <img
                src={img20}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </label>
            <input
              style={{
                border: "solid 2px",
                width: "100%",
                onClick: "noChange",
              }}
              placeholder="Bullying(1-3)"
              type="number"
              id="bullying"
              name="bullying"
              value={formValues.bullying}
              onChange={handleChange}
              className="form-control"
              min={1}
              max={3}
            />
            {/* <p className="txtclr">Bullying refers to repeated aggressive behavior that involves an imbalance of power, where one individual or group intentionally harms, harasses, or intimidates another person. It can occur in various settings, such as schools, workplaces, or online platforms. Bullying takes different forms, including physical, verbal, social, or cyberbullying. The effects of bullying can be profound and long-lasting, impacting the well-being, mental health, and academic performance of those involved.</p> */}
            <p className="txtclr">
              Bullying refers to repeated aggressive behavior that involves an
              imbalance of power, where one individual or group intentionally
              harms, harasses, or intimidates another person.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit} className="step-form">
  //       {renderFormStep()}
  //       <div>
  //         {currentStep > 1 && (
  //           <button
  //             type="button"
  //             onClick={handlePrevious}
  //             className="btn btn-secondary"
  //           >
  //             Previous
  //           </button>
  //         )}
  //         {currentStep < totalSteps && (
  //           <button
  //             type="button"
  //             onClick={handleNext}
  //             className="btn btn-primary"
  //           >
  //             Next
  //           </button>
  //         )}
  //         {currentStep === totalSteps && (
  //           <button type="submit" className="btn btn-primary">
  //             Submit
  //           </button>
  //         )}
  //       </div>
  //     </form>
  //     {/* {result && <div className="prediction-result">Result: {result.result}</div>} */}
  //     {result && (
  //       <div className="prediction-result">
  //         Your stres level is:{" "}
  //         {result.result === 0
  //           ? "Acute Stress"
  //           : result.result === 1
  //           ? "Episodic Acute Stress"
  //           : "Chronic Stress"}
  //       </div>
  //     )}
  //   </div>
  // );
  return (
    <div className="form-container">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="step-form">
          <div className="form-group">
            {renderFormStep()}
          </div>
          <div className="btn-group">
            {currentStep > 1 && (
              <button type="button" onClick={handlePrevious} className="btn btn-secondary">
                Previous
              </button>
            )}
            {currentStep < totalSteps && (
              <button type="button" onClick={handleNext} className="btn btn-primary">
                Next
              </button>
            )}
            {currentStep === totalSteps && (
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            )}
          </div>
        </form>
        {result && (
          <div className="prediction-result mt-3">
            Your stress level is:{" "}
            {result.result === 0
              ? "Acute Stress"
              : result.result === 1
              ? "Episodic Acute Stress"
              : "Chronic Stress"}
          </div>
        )}
      </div>
    </div>
  );


 
  

};

export default Stressometer;
