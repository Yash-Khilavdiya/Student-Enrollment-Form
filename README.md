<img width="1893" height="871" alt="image" src="https://github.com/user-attachments/assets/d5d305c7-6bae-41f4-b6d0-54656b9a93f2" /># Student-Enrollment-Form
<!--# Description-->
I have built project on topic **student enrollment form** which stores and updates information of student such as student roll no, student fullname, student class, student birthdate, student address, student enrolldate. All these data is saved into the **JPDB Database** through its **PUT Request API** and **SAVE Button** and for updating a existing student record **(based on student roll no as PRIMARY KEY)** first a **GET_BY_KEY request** is used to fetch the details of exisitng student details and if the data for that roll no. exists is the database which means that already a student with that roll no is registered in the database so for that roll_no data is displayed in the respective form fields such student fullname on student fullname input field element, student class on class input element on frontend and other fields respectively. Now user can make changes in the form data because it is automatically populated and **student roll no. field is disabled** for update record because it is a primary key which helps us in uniqely identifying a student record so after making changes user can **click on CHANGE buttton** and data will get updated in the database and for that **UPDATE cmd request** is used.

In the form there are **3 button** - **Save** for saving data, **Change** for updating student record and **Reset** for reset the form. Now when user enters an **student roll no.** then **GET request is  executed** to search for record in the database and if the **record is found for the entered roll no of student**, then all data will be populated in form and **first field** which is **student roll no field** will get **disabled** save button gets disabled and **update and reset button will be enabled** and if the student record does not exist in the database so the api will return status not equal to 200 maybe 400, 401 so it means that student record for that **roll no does not exist in the database** so this means it is a new student so **save and reset button will be enabled** and **Change button will be disabled**.

# Benefits of using JsonPowerDB
# Release History (release of your JsonPowerDB related code on Github)
# Table of contents
# Illustrations
Initial Page- 
<img width="1893" height="871" alt="image" src="https://github.com/user-attachments/assets/eedfa6c4-2a06-47fb-b02a-5c1146dc4e42" />
For new student record -
<img width="1918" height="887" alt="image" src="https://github.com/user-attachments/assets/b1d4ed79-88c3-455e-8cc9-6dca01083d28" />
For update studennt record - 
<img width="1896" height="875" alt="image" src="https://github.com/user-attachments/assets/55d47aa7-46a9-469e-b1f6-a3547f25a959" />
Database image - 
<img width="1914" height="955" alt="image" src="https://github.com/user-attachments/assets/169a488d-35d4-4c6b-b748-e7b31b1b48ab" />
Creating a Student -
<img width="1896" height="877" alt="image" src="https://github.com/user-attachments/assets/f0ebf0d8-990f-48db-8d2e-b996fd4de048" />
<img width="1919" height="915" alt="image" src="https://github.com/user-attachments/assets/d49758d7-6394-4a74-8554-2af765f82df7" />
Updating a Student record -
Before Updating -  
<img width="1794" height="864" alt="image" src="https://github.com/user-attachments/assets/e4f79ea5-3ade-4eab-84a4-18989aa2b385" />
<img width="1651" height="656" alt="image" src="https://github.com/user-attachments/assets/0dac0607-6b64-4645-8f34-3c60faf8c556" />
After Updating -
<img width="1787" height="850" alt="image" src="https://github.com/user-attachments/assets/55ab5fd6-b2ae-4782-bff9-6c77baf20123" />
<img width="1919" height="838" alt="image" src="https://github.com/user-attachments/assets/f5f2ec8a-17af-44df-824d-f7f9b13c683f" />
Validation and Alerts - 
<img width="1702" height="871" alt="image" src="https://github.com/user-attachments/assets/f5cdc964-14de-493b-8cce-2a4007698fee" />
<img width="1743" height="858" alt="image" src="https://github.com/user-attachments/assets/188d9c3b-91d1-4551-bf5c-daa439bb0c26" />
<img width="1682" height="874" alt="image" src="https://github.com/user-attachments/assets/06c116fd-b264-47b6-a104-dd794791b755" />
<img width="1735" height="866" alt="image" src="https://github.com/user-attachments/assets/c68b132d-92c7-4d70-a8e3-f40731a28c53" />
<img width="1694" height="862" alt="image" src="https://github.com/user-attachments/assets/bc908734-4fc0-4bdc-8d36-a778d25f53c4" />
Reset Button - 
<img width="1661" height="873" alt="image" src="https://github.com/user-attachments/assets/ee75771f-2235-4a61-abe8-de1273556a40" />
<img width="1779" height="868" alt="image" src="https://github.com/user-attachments/assets/44fe3c07-b75b-4502-bc2a-c1dc64f95ec3" />



















# Scope of functionalities
# Examples of use
# Project status
# Sources
# Other information
