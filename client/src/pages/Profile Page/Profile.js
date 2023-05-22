import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import { Button } from "react-bootstrap";

function Profile() {
  return (
    <div className={styles.user_box}>
      <div className={styles.profile_box1}>
        <div className={styles.picture_card}>
          <div className={styles.img_container}>
            <img src="vietNguyen" alt="viet nguyen" />
          </div>
        </div>

        <div className={styles.user_details}>
          <h3>Viiet Nguyen</h3>
          <h3>email</h3>
          <h4>city</h4>
        </div>

        <div className={styles.edit_button}>
          <Button variant="outline-dark">edit</Button>
        </div>
      </div>

      <div className={styles.profile_box2}>
        <div className={styles.level}>
          <div className={styles.card}>
            <h3>Level</h3>
          </div>
        </div>

        <div className={styles.completed_courses}>
          <div className={styles.card}>
            <h3>Completed Courses</h3>
          </div>
        </div>

        <div className={styles.started_lessons}>
          <div className={styles.card}>
            <h3>Started Lessons</h3>
          </div>
        </div>

        <div className={styles.courses}>
          <div className={styles.card}>
            <h3>Courses</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
