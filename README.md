# Student-Enrollment-Form
# Description
I have built project on topic **student enrollment form** which stores and updates information of student such as student roll no, student fullname, student class, student birthdate, student address, student enrolldate. All these data is saved into the **JPDB Database** through its **PUT Request API** and for updating a existing student record **(based on student roll no as PRIMARY KEY)** first a **GET_BY_KEY request** is used to fetch the details of exisitng student details and if the data for that roll no. exists is the database which means that already a student with that roll no is registered in the database so for that roll_no data is displayed in the respective form fields such student fullname on student fullname input field element, student class on class input element on frontend and other fields respectively. Now user can make changes in the form data because it is automatically populated and **student roll no. field is disabled** for update record because it is a primary key which helps us in uniqely identifying a student record so after making changes user can "click on CHANGE buttton" and data will get updated in the database and for that **UPDATE cmd request** is used.

In the form there are **3 button** - **Save** for saving data, **Change** for updating student record and **Reset** for reset the form. Now when user enters an **student roll no.** then **GET request is  executed** to search for record in the database and if the **record is found for the entered roll no of student**, then all data will be populated in form and **first field** which is **student roll no field** will get **disabled** save button gets disabled and **update and reset button will be enabled** and if the student record does not exist in the database so the api will return status not equal to 200 maybe 400, 401 so it means that student record for that **roll no does not exist in the database** so this means it is a new student so **save and reset button will be enabled** and **Change button will be disabled**.

# Benefits of using JsonPowerDB
# Release History (release of your JsonPowerDB related code on Github)
# Table of contents
# Illustrations
# Scope of functionalities
# Examples of use
# Project status
# Sources
# Other information
