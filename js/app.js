(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Mobile navigation */
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var isEnglish = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0;
  var navLabelOpen = isEnglish ? "Open navigation menu" : "Otwórz menu nawigacji";
  var navLabelClose = isEnglish ? "Close navigation menu" : "Zamknij menu nawigacji";

  function setNavOpen(isOpen) {
    if (!navToggle || !siteNav) return;
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggle.setAttribute("aria-label", isOpen ? navLabelClose : navLabelOpen);
    siteNav.classList.toggle("is-open", isOpen);
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = navToggle.getAttribute("aria-expanded") === "true";
      setNavOpen(!open);
    });

    siteNav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNavOpen(false);
    });
  }

  /* Project expand / collapse */
  document.querySelectorAll(".project__toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      var project = button.closest(".project");
      var panelId = button.getAttribute("aria-controls");
      var panel = panelId ? document.getElementById(panelId) : null;
      if (!project || !panel) return;

      var willOpen = !project.classList.contains("is-open");
      project.classList.toggle("is-open", willOpen);
      button.setAttribute("aria-expanded", willOpen ? "true" : "false");
      if (willOpen) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });
  });

  /* YouTube click-to-play (avoids Error 153 / missing Referer on initial load) */
  document.querySelectorAll(".video-embed[data-youtube-id]").forEach(function (wrap) {
    var facade = wrap.querySelector(".video-facade");
    if (!facade) return;

    facade.addEventListener("click", function () {
      var id = wrap.getAttribute("data-youtube-id");
      var title = wrap.getAttribute("data-title") || "YouTube video";
      if (!id) return;

      /* file:// has no usable Referer — open YouTube directly */
      if (window.location.protocol === "file:") {
        window.open("https://www.youtube.com/watch?v=" + id, "_blank", "noopener");
        return;
      }

      var origin = encodeURIComponent(window.location.origin);
      var iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube.com/embed/" +
        id +
        "?autoplay=1&rel=0&modestbranding=1&origin=" +
        origin;
      iframe.title = title;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      wrap.innerHTML = "";
      wrap.appendChild(iframe);
    });
  });

  /* Concert photo hover-scroll / drag slider */
  document.querySelectorAll(".photo-slider__track").forEach(function (track) {
    var reducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var hoverRaf = null;
    var hoverDir = 0;
    var isDragging = false;
    var startX = 0;
    var startScroll = 0;
    var didDrag = false;

    function stopHoverScroll() {
      hoverDir = 0;
      if (hoverRaf) {
        cancelAnimationFrame(hoverRaf);
        hoverRaf = null;
      }
    }

    function hoverTick() {
      if (!hoverDir || isDragging) {
        hoverRaf = null;
        return;
      }
      track.scrollLeft += hoverDir * 1.35;
      hoverRaf = requestAnimationFrame(hoverTick);
    }

    function updateHoverDirection(clientX) {
      if (reducedMotion || isDragging) return;
      var rect = track.getBoundingClientRect();
      var x = clientX - rect.left;
      var edge = Math.min(120, rect.width * 0.22);
      if (x < edge) hoverDir = -1;
      else if (x > rect.width - edge) hoverDir = 1;
      else hoverDir = 0;

      if (hoverDir && !hoverRaf) hoverRaf = requestAnimationFrame(hoverTick);
      if (!hoverDir) stopHoverScroll();
    }

    track.addEventListener("mousemove", function (event) {
      updateHoverDirection(event.clientX);
    });
    track.addEventListener("mouseleave", stopHoverScroll);

    track.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "touch") return;
      isDragging = true;
      didDrag = false;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      track.classList.add("is-dragging");
      stopHoverScroll();
      track.setPointerCapture(event.pointerId);
    });

    track.addEventListener("pointermove", function (event) {
      if (!isDragging) return;
      var dx = event.clientX - startX;
      if (Math.abs(dx) > 4) didDrag = true;
      track.scrollLeft = startScroll - dx;
    });

    function endDrag(event) {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove("is-dragging");
      try {
        track.releasePointerCapture(event.pointerId);
      } catch (err) {
        /* ignore */
      }
    }

    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);

    track.addEventListener(
      "click",
      function (event) {
        if (didDrag) {
          event.preventDefault();
          event.stopPropagation();
          didDrag = false;
        }
      },
      true
    );
  });

  /* Intersection Observer scroll reveals */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
