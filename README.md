# Bracket Busters

## Component Tree
```
<App>
  <Nav>
  <Footer>
  <LandingContainer>
    <Intro>
      <UserAuthForm>
    <UserDashContainer>
      Link to AllLeagues
      Link to AllGroups
      <UserLeagues>
      <UserGroups>
    <Profile>
    <AllLeagues> - lists all leagues
      <LeagueForm> - to be able to add leagues
    <LeagueContainer> - for individual leagues
      Render League Rules
      <LeagueForm> - for editing
      <Messageboard>
      <Scoreboard>
      <GamesList>
      <Picks>
    <AllGroups>
      <GroupForm>
    <GroupContainer>
      <GroupForm>
      <Messageboard>
```

<!-- join and create league/group get a messageboard; also when you click on group, also logic if you sign into the page with a token; or logic to make token redirect to homepage -->