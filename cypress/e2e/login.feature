Feature: Login Behaviour

Scenario: Successful Login
  Given the user is on the login page
  When the user enters valid credentials
  And clicks the login button
  Then the user should be redirected to the home page

Scenario: Unsuccessful Login with Incorrect password
  Given the user is on the login page
  When the user enters incorrect password
  And clicks the login button
  Then an error message should be displayed
  And the user should remain on the login page

Scenario: Forgot Password Link
  Given the user is on the login page
  When the user clicks on the 'Forgot Password' link
  Then the user should be redirected to the password reset page

Scenario: Empty Fields Error
  Given the user is on the login page
  When the user clicks the login button without entering any credentials
  Then an error message should be displayed indicating that the fields cannot be empty


#todo1 scenario for logout 
#todo2 scenario for Google login 
#todo3 scenario for Facebook login
#todo4 scenario for Sign Up button
#todo5 scenario for password visibility button
#todo6 scenario for Incorrect email 