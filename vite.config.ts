/*

    This code is writen by Ahmed Ayob

*/

@use "../../utils" as u;
@use "../../base" as *;

/*

   Img Banner

*/

.img-banner {
  position: relative;
  height: 384px;

  .AsyncImage-root {
    margin: 0 auto;
  }

  &__layout {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: linear-gradient(to bottom,
        rgba(255, 255, 255, 0),
        rgb(85 85 85 / 16%),
        rgba(0, 0, 0, 0.623));
    opacity: 0.5;
    pointer-events: none;
  }

  &__info {
    @include u.flex(grid);
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    gap: 0;
    text-align: center;
    font-weight: medium;

    & h2 {
      margin-bottom: 1;
      white-space: nowrap;
      font-size: 2.85rem;
      font-weight: 600;
      color: var(--c-white);
    }

    & p {
      margin-bottom: 1.2rem;
      font-size: 0.9rem;
      color: var(--c-white);
    }

    &>div {
      @include u.flex(flex, center, center);
      gap: 1.8rem;
      font-size: 0.8rem;
    }
  }

  &__button {
    cursor: pointer;
    white-space: nowrap;
    background: var(--c-white);
    padding-inline: 1.2rem;
    padding-block: 0.7rem;
    font-weight: 500;
    color: var(--black-300);
  }
}

.img-banner__skeleton {
  width: 275px;
  height: 384px;

  @include u.breakpoint("large") {
    width: 1026px;
    height: 684px;
  }
}


.opacity-1 {
  opacity: 1;
}
