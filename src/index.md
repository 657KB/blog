---
layout: home
title: 'Home'
---

<div class="home-header" style="display: flex;">
  <div>
    <h1>Hi, I'm 657</h1>
    <div style="min-height: 4rem;"></div>
    <a class="home-link" href="https://github.com/657KB/">Github: 657KB</a>
    <a class="home-link" href="https://www.instagram.com/657kb_?igsh=MThic3QzbDN3cng4Zw==">Instagram: @657kb_</a>
    <a class="home-link" href="mailto:kuyermqi@outlook.com">Email: kuyermqi@outlook.com</a>
  </div>
  <div class="home-avatar-container">
    <div class="light-relative">
      <img class="home-avatar" src="/images/avatar.jpg" />
      <img class="light" style="top: 1em; left: -1em; animation-delay: .3s;" src="/images/light.png" />
      <img class="light" style="top: 4em; right: 0em;" src="/images/light.png" />
      <img class="light" style="bottom: -1em; right: 3em; animation-delay: .5s;" src="/images/light.png" />
    </div>
  </div>
</div>

<style>
.home-link {
  display: block;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  line-height: 200%;
  color: #757575;
}
.home-avatar-container {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.home-avatar {
  width: 12em;
  height: 12em;
  margin-top: unset;
}
.light-relative {
  position: relative;
  width: 12em;
  height: 12em;
}
.light {
  width: 2em;
  height: 2em;
  animation: light-animation ease-in-out .5s infinite alternate;
  position: absolute;
}
@media screen and (max-width: 560px) {
  .home-header {
    flex-direction: column;
  }
  .home-avatar-container {
    align-items: flex-start;
    justify-content: flex-start;
  }
  .light-relative {
    margin-top: 4rem;
  }
}
@keyframes light-animation {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(.8);
  }
}
</style>