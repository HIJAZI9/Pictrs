# 📊 Project Description
This is a dashboard template for various display and monitoring systems. It offers the following key features:

* Displaying statistics 📈

* Displaying log data from a Ruby application 📝

* Monitoring health checks of various third-party APIs ✅

* Displaying various company KPIs 📊

* Integrating alert systems through the monitoring system 🚨

Note: This project does not fetch any API data; all data is included as default values.



# 🛠️ System Dependencies

For this System to run, the following software should be installed:
### 📌 Required versions:
- **Ruby** 3.2.0
- **Rails** 8.0.2

> **Note:**  
> Although the Rails guide recommends using the **ASDF** version manager, our project uses **RVM** (Ruby Version Manager) to manage Ruby versions.  
> While **ASDF** is gaining popularity and surpassing other version managers like **rbenv** and **RVM**, we have chosen **RVM** for its flexibility and compatibility with our setup.

# ⚙️ Implementation Process
This project is designed to be run in a development environment. Once the project is up and running, the first page you encounter will be the user access page.

1. To access the dashboard, users will need to provide valid credentials: a username and password. If either of the credentials is incorrect, the system will notify the user with the message:
   "Incorrect username or password."
<div style="display: flex; justify-content: space-between; align-items: center;">
  <img width="45%" alt="pictrs1" src="https://github.com/user-attachments/assets/b36ea322-eb8c-410f-b617-87a4a96e2989" />
  <img width="45%" alt="pictrs2" src="https://github.com/user-attachments/assets/462ed136-591a-4267-aebf-e6c0f76a1215" />

</div>

    After logging in, the user can log out at any time.
<div style="display: flex; justify-content: space-between; align-items: center;">

  <img width="1106" alt="logout_navi" src="https://github.com/user-attachments/assets/09a63f29-29d0-434c-8f36-0f53e208fcb3" />
</div>


2. The statistics display system shows two different pages, each containing four Chart.js charts (bar, pie, etc.). Each page will be displayed for 5 seconds, after which the other page will be shown for the same duration of 5 seconds. In short, each page will be shown for 5 seconds before switching to the other.
<div style="display: flex; justify-content: space-between; align-items: center;">
<img width="45%" alt="slide01" src="https://github.com/user-attachments/assets/ba0b02db-5a69-4464-8fb4-7c63403ff863" />
<img width="45%" alt="slide02" src="https://github.com/user-attachments/assets/ef4a74ae-af6d-4443-b77c-6ee1eb223306" />
</div>


3. The current slide can be controlled as follows:

* Press the ␣ (Space bar) to pause the current slide.
The timer will run for 5 seconds. When the slide is paused, the remaining time will be saved as a parameter.

* Press the ␣ (Space bar) again to resume the current slide. The remaining time will be shown, and the slide will continue from where it left off.

* Press the → (Right Arrow) to show the next slide.

* Press the ← (Left Arrow) to show the previous slide.

<div style="display: flex; justify-content: space-between; align-items: center;">
<img width="1456" alt="animation" src="https://github.com/user-attachments/assets/26b599fc-c4b0-4eed-8b96-1e5ac0e4faba" />
</div>

# 🚀 Run Locally

To run this project on your local machine, follow the steps below:

* First, clone the repository to your local machine
* Install Gems `bundle install`
* Set Up the Database `rails db:create > rails db:migrate` > `rails db:seed` or Alternatively, you can manually create a user by using the Rails console. Open the console with the following command `rails c` then `User.create(username: "Christian", password: "123")`
* Finally, run the Rails server and visit http://localhost:3000 in your browser to see the application running locally. `rails s`






