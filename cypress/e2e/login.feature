Feature: login

Scenario: Successful Login
  Given the user is on the login page
  When the user enters valid credentials
  And clicks the login button
  Then the user should be redirected to the home page
  And a welcome message should be displayed

Scenario: Unsuccessful Login with Incorrect Credentials
  Given the user is on the login page
  When the user enters incorrect credentials (invalid username or password)
  And clicks the login button
  Then an error message should be displayed
  And the user should remain on the login page

Scenario: Forgot Password Link
  Given the user is on the login page
  When the user clicks on the "Forgot Password" link
  Then the user should be redirected to the password reset page

Scenario: Empty Fields Error
  Given the user is on the login page
  When the user clicks the login button without entering any credentials
  Then an error message should be displayed indicating that the fields cannot be empty

Scenario: Lockout after Multiple Failed Attempts
  Given the user is on the login page
  When the user enters incorrect credentials multiple times (exceeding the allowed limit)
  Then the user account should be locked
  And an appropriate message should be displayed

Scenario: Password Visibility Toggle
  Given the user is on the login page
  When the user clicks on the password visibility toggle button
  Then the password should be visible as plain text
  And when clicked again, it should be masked

Scenario: Remember Me Checkbox
  Given the user is on the login page
  When the user logs in with the "Remember Me" option checked
  Then the user's session should persist across browser sessions

Scenario: Logout Functionality
  Given the user is logged in
  When the user clicks on the logout button
  Then the user should be redirected to the login page
  And the session should be terminated