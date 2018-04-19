# Bracket Busters

Bracket Busters is an application allows users to compete against their friends by choosing winners for real world sports games.

You are able to create and manage your own leagues and will have a personal scoreboard for each participant. Each league will also have its own message board that will allow you to communicate with those in your league. Each league also has the option to be private or public.

If you are not participating in a league or would like to communicate with those outside of your league, you can also create a group. Like a league, each group has its own message board so users can communicate with each other.

## Backend

Information about the backend of Bracket Busters can be found here: [CF Madness](https://github.com/sportsfellows/sports-app)

## Component Tree
```
<App>
  <Navbar>
    <Avatar>
    <Icons>
  <LandingContainer>
    <CreateSection>
    <JoinSection>
    <Modal>
    <Intro>
      <Modal>
      <UserAuthForm>
    <ProfileContainer>
      <ProfileForm>
    <LeagueAllContainer>
      <LeagueAllPublicList>
      <PrivateLeagueForm>
    <LeagueItemContainer>
      <LeagueItem>
      <LeagueForm> - for editing
      <Messageboard>
      <Scoreboard>
      <UserPickContainer>
        <GamesList>
        <UserPickForm>
        <UserPickItem>
    <GroupAllContainer>
      <GroupAllPublicList>
      <PrivateGroupForm>
    <GroupItemContainer>
      <GroupItem>
      <GroupForm>
      <Messageboard>
  <Footer>
```

## License

MIT © [Brian Bixby](https://github.com/brianbixby), [Bessie Arino](https://github.com/bishang), & [Ken Unterseher](https://github.com/kennieU)
<!-- join and create league/group get a messageboard; also when you click on group, also logic if you sign into the page with a token; or logic to make token redirect to homepage -->