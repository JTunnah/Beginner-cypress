Feature: ByMiles Homepage

  I want to open bymiles Homepage
  
  
  Scenario: User can get a quick quote
  Given i am on the bymiles Homepage "www.bymiles.co.uk"
  When the user enters "x314mcw" into the search box
  And the user clicks the quick quote button
  And the user clicks yes continue
  And the user fills the form out that is displayed
  |NcdValue|DobValue|Postcode|RenewalDate|email|
  |#react-select-ncd--option-1|1996-01-06|cm77 6ad|#react-select-renewal_month--option-5|joshua-1996@hotmail.com|
  Then the users quote should be "£1222.10"

 # Scenario: User cant get a quick quote underage
  Given i am on the bymiles Homepage "www.bymiles.co.uk"
  When the user enters "x314mcw" into the search box
  And the user clicks the quick quote button
  And the user clicks yes continue
  And the user fills the form out that is displayed
  |NcdValue|DobValue|Postcode|RenewalDate|email|
  |#react-select-ncd--option-1|2016-01-06|cm77 6ad|#react-select-renewal_month--option-5|joshua-1996@hotmail.com|
  And the users quote should be "£1222.10"
  And the user wants to get a quote
  And the user wants to click got it
  And the user wants to click i understand
  And the user wants to click got it
  And the user wants to fill the form out
  Then the final quote page should contain "Sorry. We can't insure you just yet."

