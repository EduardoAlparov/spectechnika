export default function onTabsConfigurator() {
  const tabsWrapper = document.querySelectorAll('.js-tabs-config');

  tabsWrapper.forEach(tabs => {
    const contents = tabs.querySelectorAll('.configurator__tabs-content');
    const paginationBtns = tabs.querySelectorAll('.configurator__pagination-item');

    let itemNum = 0;

    contents.forEach((content, k) => {

      const nextBtn = content.querySelector('.configurator__tabs-button-next');
      const prevBtn = content.querySelector('.configurator__tabs-button-prev');

      nextBtn.addEventListener("click", function () {

        if (k == contents.length - 1) {
          return;
        }

        itemNum = itemNum + 1;

        console.log("itemNum", itemNum);

        contents.forEach((cont, i) => {
          cont.classList.remove("active");

          console.log(i);

          if (i === itemNum) {
            cont.classList.add("active");
          }
        })

        paginationBtns.forEach((paginationBtn, j) => {
          paginationBtn.classList.remove("active");

          if (j === itemNum) {
            paginationBtn.classList.add("active");
          }
        })
      })

      if (!prevBtn) {
        return;
      }

      prevBtn.addEventListener("click", function () {

        itemNum = itemNum - 1;

        console.log("itemNum", itemNum);

        contents.forEach((cont, i) => {
          cont.classList.remove("active");

          console.log(i);

          if (i === itemNum) {
            cont.classList.add("active");
          }
        })

        paginationBtns.forEach((paginationBtn, j) => {
          paginationBtn.classList.remove("active");

          if (j === itemNum) {
            paginationBtn.classList.add("active");
          }
        })
      })
    })

    paginationBtns.forEach((pagin, key) => {
      pagin.addEventListener('click', function () {
        if (!pagin.classList.contains("active")) {

          itemNum = key;

          paginationBtns.forEach((paginationBtn, j) => {
            paginationBtn.classList.remove("active");

            if (j === key) {
              paginationBtn.classList.add("active");
            }
          })

          contents.forEach((cont, i) => {
            cont.classList.remove("active");

            if (i === key) {
              cont.classList.add("active");
            }
          })
        }
      })
    })
  })
}
