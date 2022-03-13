# User Story

## Noted
    All the data in this project will auto re-generate when you guys reload or refetch. It's just for making the app realistic as possible.

## Debit Card Screen
    As a user i want to view my debit card info.

### ACCEPTANCE CRITERIA
| AC | Requirements                                                                                                                                                                                                                                                                                                                                                 |
|----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | Scenario: User open app<p/>   **Given:** User open app<p/> **Then:** App will open and focus to **Debit Card Screen**, and fetch all data of user debit card from server and display on the screen<p/>                                                                                                                                                       |
| 2  | Scenario: User pull down to refresh<p/>  **Given:** User is at **Debit Card Screen**<p/> **When:** User pull down to refresh<p/> **Then:** App will reload and fetch new data of user debit card                                                                                                                                                             |
| 3  | Scenario: User want to hide their card number and CVV<p/>  **Given:** User is at **Debit Card Screen**<p/> **When:** User click on text **hide card number**<p/> **Then:** All card number will be turned to dot(.) and only the last 4 digits is visible. All the CVV will be turned to star(*)                                                             |
| 4  | Scenario: User turn **Weekly Spending Limit** to on <p/>  **Given:** User is at **Debit Card Screen**<p/> **When:** User switch on **Weekly Spending Limit**<p/> **Then** Open **Spending Limit Screen**<p/> **When:** User finish selected spending limit and go back to **Debit Card Screen**<p/> **Then:** Display debit card spending limit progress bar |
| 5  | Scenario: User turn **Weekly Spending Limit** to off<p/>  **Given:** User is at **Debit Card Screen**<p/> **When:** User switch off **Weekly Spending Limit**<p/> **Then** Hide debit card spending limit progress bar                                                                                                                                       |


## Spending Limit Screen
    As a user i want to seleted my spending limit

### ACCEPTANCE CRITERIA
| AC | Requirements                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | Scenario: User set a spending limit<p/>   **Given:** User is at **Spending Limit Screen**<p/> **Then:** App will fetch and display all the available spending limit option from the database<p/> **When:** User press on option<p/> **Then:** The option will display on the selected field for user can see and know their selected<p/> **When:** User click on button save<p/> **Then:** Save the selected to database and go back.<p/>  **Noted**: Button save will be disabled when user don't selected any spending limit option. |
| 2  | Scenario: User don't set spending limit and press go back<p/>  **Given:** User is at **Spending Limit Screen**<p/> **When:** User select their spending limit option<p/> **Then:** Instead of press save, they press button go back on the header</p> **Then:** Don't save anything, just go back. And in the **Debit Card Screen**, hide the debit card spending limit progress bar                                                                                                                                           |
