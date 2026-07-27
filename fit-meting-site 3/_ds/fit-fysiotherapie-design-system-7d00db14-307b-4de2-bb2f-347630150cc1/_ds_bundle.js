/* @ds-bundle: {"format":4,"namespace":"FITFysiotherapieDesignSystem_7d00db","components":[{"name":"InfoCard","sourcePath":"components/cards/InfoCard.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"FAQAccordion","sourcePath":"components/feedback/FAQAccordion.jsx"},{"name":"QuestionCard","sourcePath":"components/feedback/QuestionCard.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"InsurerStrip","sourcePath":"components/marketing/InsurerStrip.jsx"},{"name":"ReviewBadge","sourcePath":"components/marketing/ReviewBadge.jsx"},{"name":"TrustBar","sourcePath":"components/marketing/TrustBar.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/cards/InfoCard.jsx":"3bbbc1dfded1","components/cards/StatCard.jsx":"c4a0da863e21","components/core/Badge.jsx":"00e39e088df5","components/core/Button.jsx":"10d7dbe88fe4","components/core/Icon.jsx":"597aea3e6409","components/feedback/FAQAccordion.jsx":"8fa8ab7845c9","components/feedback/QuestionCard.jsx":"d87351d6d2d1","components/marketing/Hero.jsx":"d21b8023ed08","components/marketing/InsurerStrip.jsx":"fde03acf4592","components/marketing/ReviewBadge.jsx":"451528d7f1e9","components/marketing/TrustBar.jsx":"9549bf8d5939","components/navigation/Breadcrumb.jsx":"80b31dd96bd4","components/navigation/Footer.jsx":"fddfaeddd569","components/navigation/SiteHeader.jsx":"6e0cdaaf9d10"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FITFysiotherapieDesignSystem_7d00db = window.FITFysiotherapieDesignSystem_7d00db || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/InfoCard.jsx
try { (() => {
function InfoCard(props) {
  const {
    title,
    description,
    href = "#",
    linkLabel = "Meer informatie"
  } = props;
  return React.createElement("a", {
    href,
    style: {
      display: "block",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      padding: 22,
      textDecoration: "none",
      boxShadow: "var(--shadow-card)",
      transition: "transform var(--duration-base) var(--ease-standard)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-2px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
    }
  }, React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-lg)",
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, title), React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      lineHeight: "var(--leading-normal)"
    }
  }, description), React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      color: "var(--neutral-900)"
    }
  }, linkLabel + " →"));
}
Object.assign(__ds_scope, { InfoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InfoCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge(props) {
  const {
    children,
    tone = "neutral",
    icon
  } = props;
  const tones = {
    yellow: {
      background: "var(--brand-yellow-500)",
      color: "var(--neutral-900)"
    },
    neutral: {
      background: "var(--neutral-100)",
      color: "var(--text-secondary)"
    },
    dark: {
      background: "var(--neutral-900)",
      color: "var(--white)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid var(--border-default)"
    }
  };
  const style = Object.assign({
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: "var(--text-xs)",
    padding: "6px 12px",
    borderRadius: "var(--radius-pill)",
    whiteSpace: "nowrap"
  }, tones[tone] || tones.neutral);
  return React.createElement("span", {
    style
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button(props) {
  const {
    children,
    variant = "primary",
    size = "md",
    href,
    onClick,
    type = "button",
    disabled
  } = props;
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    border: "1.5px solid transparent",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    textDecoration: "none",
    transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
    fontSize: size === "lg" ? "var(--text-md)" : "var(--text-sm)",
    padding: size === "lg" ? "16px 30px" : "12px 22px"
  };
  const variants = {
    primary: {
      background: "linear-gradient(90deg, var(--brand-yellow-400) 0%, var(--brand-yellow-600) 100%)",
      color: "var(--action-primary-text)",
      borderColor: "var(--action-primary)"
    },
    secondary: {
      background: "var(--action-secondary)",
      color: "var(--action-secondary-text)",
      borderColor: "var(--action-secondary)"
    },
    dark: {
      background: "var(--neutral-900)",
      color: "var(--white)",
      borderColor: "var(--neutral-900)"
    }
  };
  const style = Object.assign({}, base, variants[variant] || variants.primary);
  const Tag = href ? "a" : "button";
  return React.createElement(Tag, {
    href,
    type: href ? undefined : type,
    onClick: disabled ? undefined : onClick,
    style,
    disabled,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "linear-gradient(90deg, var(--brand-yellow-500) 0%, var(--brand-yellow-700) 100%)";
      if (variant === "secondary") e.currentTarget.style.background = "var(--action-secondary-hover)";
      if (variant === "dark") e.currentTarget.style.background = "var(--neutral-700)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = variants[variant].background;
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const PATHS = {
  chevronDown: "M6 9l6 6 6-6",
  star: "M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9L6 21l1.6-7L2.2 9.2l7.1-.6L12 2z",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.1z",
  messageCircle: "M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-4-1L3 21l2-5.5a8.4 8.4 0 0 1-1-4A8.5 8.5 0 1 1 21 11.5z",
  check: "M20 6L9 17l-5-5",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z",
  mapPin: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  x: "M18 6L6 18M6 6l12 12",
  menu: "M3 12h18M3 6h18M3 18h18"
};
function Icon(props) {
  const {
    name,
    size,
    color,
    strokeWidth,
    style
  } = props;
  const d = PATHS[name] || PATHS.check;
  return React.createElement("svg", {
    width: size || 20,
    height: size || 20,
    viewBox: "0 0 24 24",
    fill: name === "star" ? color || "currentColor" : "none",
    stroke: name === "star" ? "none" : color || "currentColor",
    strokeWidth: strokeWidth || 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: d
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function StatCard(props) {
  const {
    icon = "activity",
    value,
    label,
    tone = "dark"
  } = props;
  const tones = {
    dark: {
      background: "var(--neutral-900)",
      color: "var(--white)",
      iconColor: "var(--brand-yellow-500)"
    },
    yellow: {
      background: "var(--brand-yellow-500)",
      color: "var(--neutral-900)",
      iconColor: "var(--neutral-900)"
    }
  };
  const t = tones[tone] || tones.dark;
  return React.createElement("div", {
    style: {
      background: t.background,
      color: t.color,
      borderRadius: "var(--radius-md)",
      padding: "26px 20px",
      textAlign: "center",
      fontFamily: "var(--font-sans)"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    color: t.iconColor,
    size: 26,
    style: {
      marginBottom: 10
    }
  }), React.createElement("div", {
    style: {
      fontSize: "var(--text-2xl)",
      fontWeight: 800,
      lineHeight: 1
    }
  }, value), React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      opacity: 0.85,
      marginTop: 8
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FAQAccordion.jsx
try { (() => {
const {
  useState
} = React;
function FAQAccordion(props) {
  const {
    items = [],
    heading = "Veel gestelde vragen"
  } = props;
  const [openIndex, setOpenIndex] = useState(0);
  return React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)"
    }
  }, React.createElement("h3", {
    style: {
      fontSize: "var(--text-xl)",
      fontWeight: 800,
      color: "var(--text-primary)",
      marginBottom: 18
    }
  }, heading), React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map((it, i) => {
    const isOpen = openIndex === i;
    return React.createElement("div", {
      key: i,
      style: {
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        background: "var(--surface-card)"
      }
    }, React.createElement("button", {
      onClick: () => setOpenIndex(isOpen ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 18px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        fontWeight: 700,
        color: "var(--text-primary)"
      }
    }, it.question, React.createElement(__ds_scope.Icon, {
      name: "chevronDown",
      size: 18,
      color: "var(--text-muted)",
      style: {
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform var(--duration-base) var(--ease-standard)"
      }
    })), isOpen && React.createElement("div", {
      style: {
        padding: "0 18px 16px",
        fontSize: "var(--text-sm)",
        color: "var(--text-secondary)",
        lineHeight: "var(--leading-normal)"
      }
    }, it.answer));
  })));
}
Object.assign(__ds_scope, { FAQAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FAQAccordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/QuestionCard.jsx
try { (() => {
function QuestionCard(props) {
  const {
    label = "Heb je een vraag?",
    sublabel = "Onze Fysio-expert geeft graag antwoord.",
    phone = "085 060 18 08",
    personLabel = "Foto van medewerker"
  } = props;
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: 16,
      boxShadow: "var(--shadow-float)",
      fontFamily: "var(--font-sans)",
      maxWidth: 300
    }
  }, React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      flexShrink: 0,
      background: "var(--neutral-100)",
      border: "1px dashed var(--neutral-300)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 9,
      color: "var(--text-muted)",
      textAlign: "center",
      lineHeight: 1.1,
      padding: 4,
      boxSizing: "border-box"
    }
  }, personLabel), React.createElement("div", null, React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)"
    }
  }, label), React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-secondary)",
      margin: "2px 0 6px"
    }
  }, sublabel), React.createElement("a", {
    href: "tel:" + phone.replace(/\s/g, ""),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-sm)",
      fontWeight: 700,
      color: "var(--neutral-900)",
      textDecoration: "none"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "messageCircle",
    size: 15,
    color: "var(--brand-yellow-600)"
  }), phone)));
}
Object.assign(__ds_scope, { QuestionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/QuestionCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
function Hero(props) {
  const {
    kicker = "FIT Fysiotherapie",
    title,
    subtitle,
    usps = [],
    ctaLabel = "Afspraak maken",
    ctaHref = "#",
    microcopy = "Op werkdagen binnen 24 uur geholpen",
    photoLabel = "Foto van praktijk/behandeling"
  } = props;
  return React.createElement("section", {
    style: {
      position: "relative",
      background: "linear-gradient(180deg, var(--neutral-700), var(--neutral-900))",
      color: "var(--white)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      padding: "56px 40px",
      fontFamily: "var(--font-sans)"
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--pattern-dots-white)",
      backgroundSize: "var(--pattern-dots-size)",
      opacity: 0.12,
      maskImage: "linear-gradient(to left, black, transparent)",
      WebkitMaskImage: "linear-gradient(to left, black, transparent)"
    }
  }), React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      fontSize: 11,
      color: "var(--neutral-300)",
      border: "1px dashed var(--neutral-500)",
      borderRadius: 6,
      padding: "4px 8px"
    }
  }, "🖼 " + photoLabel), React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 640
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 14
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      overflow: "hidden",
      flexShrink: 0
    }
  }, React.createElement("img", {
    src: "assets/logo-mark-white-on-black.jpg",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: "var(--text-sm)",
      color: "var(--brand-yellow-500)"
    }
  }, kicker)), React.createElement("h1", {
    style: {
      margin: "0 0 14px",
      fontSize: "var(--text-3xl)",
      fontWeight: 800,
      lineHeight: "var(--leading-tight)"
    }
  }, title), subtitle && React.createElement("p", {
    style: {
      margin: "0 0 18px",
      fontSize: "var(--text-md)",
      color: "var(--neutral-200)"
    }
  }, subtitle), usps.length > 0 && React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 26px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, usps.map((u, i) => React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-sm)",
      color: "var(--neutral-100)"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    color: "var(--brand-yellow-500)"
  }), u))), React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start"
    }
  }, React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    href: ctaHref
  }, ctaLabel), React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--neutral-400)"
    }
  }, microcopy))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/InsurerStrip.jsx
try { (() => {
function InsurerStrip(props) {
  const {
    heading = "Aangesloten bij alle zorgverzekeraars van Nederland",
    insurers = ["CZ", "VGZ", "Menzis", "Zilveren Kruis", "DSW", "ASR", "ONVZ", "Eno", "Salland", "Achmea", "Eucare", "ZZ"],
    ctaLabel = "Bekijk alle tarieven",
    ctaHref = "/tarieven"
  } = props;
  return React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "36px 24px",
      background: "var(--surface-muted)",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-sans)"
    }
  }, React.createElement("h3", {
    style: {
      margin: "0 0 20px",
      fontSize: "var(--text-lg)",
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, heading), React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      justifyContent: "center",
      marginBottom: 20
    }
  }, insurers.map((name, i) => React.createElement("span", {
    key: i,
    style: {
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-sm)",
      padding: "10px 16px",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--neutral-500)",
      minWidth: 88
    }
  }, name))), React.createElement(__ds_scope.Button, {
    variant: "secondary",
    href: ctaHref
  }, ctaLabel));
}
Object.assign(__ds_scope, { InsurerStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/InsurerStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ReviewBadge.jsx
try { (() => {
function ReviewBadge(props) {
  const {
    score = "9,2",
    count = "520+",
    label = "beoordelingen"
  } = props;
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-pill)",
      padding: "8px 16px",
      fontFamily: "var(--font-sans)",
      boxShadow: "var(--shadow-sm)"
    }
  }, React.createElement("span", {
    style: {
      display: "flex",
      gap: 2
    }
  }, [0, 1, 2, 3, 4].map(i => React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: 14,
    color: "var(--brand-yellow-500)"
  }))), React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: "var(--text-sm)",
      color: "var(--neutral-900)"
    }
  }, score), React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, "op " + count + " " + label));
}
Object.assign(__ds_scope, { ReviewBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ReviewBadge.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustBar.jsx
try { (() => {
function TrustBar(props) {
  const {
    badges = ["Persoonlijke aandacht & maatwerk", "Snelle afspraak mogelijk", "Ervaren fysiotherapeuten"],
    reviewScore = "9,2",
    reviewCount = "520+",
    phone = "085 060 18 08"
  } = props;
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      padding: "10px 22px",
      background: "var(--neutral-900)",
      color: "var(--neutral-300)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      flexWrap: "wrap"
    }
  }, badges.map((b, i) => React.createElement("span", {
    key: i
  }, b))), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--white)",
      fontWeight: 700
    }
  }, React.createElement("span", {
    style: {
      background: "var(--brand-yellow-500)",
      color: "var(--neutral-900)",
      borderRadius: 4,
      padding: "1px 6px"
    }
  }, reviewScore), "Wij scoren een " + reviewScore + " op " + reviewCount + " beoordelingen"), React.createElement("a", {
    href: "tel:" + phone.replace(/\s/g, ""),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--white)",
      textDecoration: "none"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 14
  }), phone)));
}
Object.assign(__ds_scope, { TrustBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb(props) {
  const {
    items = [{
      label: "Home",
      href: "/"
    }, {
      label: "Behandelingen",
      href: "/behandelingen"
    }]
  } = props;
  return React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, items.map((it, i) => React.createElement(React.Fragment, {
    key: i
  }, i > 0 && React.createElement("span", {
    style: {
      color: "var(--neutral-300)"
    }
  }, "›"), i === items.length - 1 ? React.createElement("span", {
    style: {
      color: "var(--text-secondary)",
      fontWeight: 600
    }
  }, it.label) : React.createElement("a", {
    href: it.href,
    style: {
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer(props) {
  const {
    tagline = "FIT Fysiotherapie staat voor persoonlijke aandacht en kwalitatieve zorg. Je krijgt onze volledige aandacht, zodat je snel weer FIT door het leven gaat.",
    kvk = "85690465",
    columns = [{
      heading: "Pagina's",
      links: ["Home", "Over ons", "Behandelingen", "Tarieven", "Contact"]
    }, {
      heading: "Meer over ons",
      links: ["Onze missie", "Specialiteiten", "Team", "FAQ"]
    }, {
      heading: "Contact info",
      links: ["085 060 18 08", "info@fit-fysiotherapie.nl", "Ma–vr 08:00–18:00"]
    }]
  } = props;
  return React.createElement("footer", {
    style: {
      background: "var(--neutral-900)",
      color: "var(--neutral-300)",
      borderRadius: "var(--radius-lg)",
      padding: "40px 32px",
      fontFamily: "var(--font-sans)"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      flexWrap: "wrap",
      marginBottom: 30
    }
  }, React.createElement("div", {
    style: {
      flex: "1 1 260px"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flexShrink: 0
    }
  }, React.createElement("img", {
    src: "assets/logo-mark-white-on-black.png",
    alt: "FIT Fysiotherapie",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block"
    }
  })), React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: "var(--text-lg)",
      color: "var(--white)",
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: "1.3em"
    }
  }, "FIT"), " Fysiotherapie")), React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      maxWidth: 320
    }
  }, tagline), React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      marginTop: 14,
      color: "var(--neutral-500)"
    }
  }, "KVK nr. " + kvk), React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 16
    }
  }, ["Facebook", "Instagram", "LinkedIn", "WhatsApp"].map((s, i) => React.createElement("span", {
    key: i,
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "var(--neutral-800)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: s === "WhatsApp" ? "messageCircle" : "phone",
    size: 14,
    color: "var(--neutral-300)"
  }))))), columns.map((col, i) => React.createElement("div", {
    key: i,
    style: {
      flex: "1 1 160px"
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--white)",
      fontSize: "var(--text-sm)",
      marginBottom: 12
    }
  }, col.heading), React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, col.links.map((l, j) => React.createElement("li", {
    key: j,
    style: {
      fontSize: "var(--text-xs)"
    }
  }, l)))))), React.createElement("div", {
    style: {
      borderTop: "1px solid var(--neutral-800)",
      paddingTop: 16,
      fontSize: "var(--text-xs)",
      color: "var(--neutral-500)"
    }
  }, "Copyright © 2026 FIT Fysiotherapie."));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const {
  useState
} = React;
function SiteHeader(props) {
  const {
    items = [{
      label: "Klachten",
      href: "#"
    }, {
      label: "Behandelingen",
      href: "#"
    }, {
      label: "Over ons",
      href: "#"
    }, {
      label: "Locaties",
      href: "#"
    }, {
      label: "Contact",
      href: "#"
    }],
    activeLabel,
    ctaLabel = "Afspraak maken",
    ctaHref = "#"
  } = props;
  const [open, setOpen] = useState(false);
  return React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 24px",
      background: "var(--white)",
      borderBottom: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-sans)",
      position: "relative"
    }
  }, React.createElement("a", {
    href: "/",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none"
    }
  }, React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flexShrink: 0
    }
  }, React.createElement("img", {
    src: "assets/logo-mark-white-on-black.png",
    alt: "FIT Fysiotherapie",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block",
      filter: "invert(1)"
    }
  })), React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: "var(--text-lg)",
      color: "var(--neutral-900)",
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, React.createElement("span", {
    style: {
      fontSize: "1.3em"
    }
  }, "FIT"), " Fysiotherapie")), React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "center"
    },
    className: "site-header-nav"
  }, items.map((it, i) => React.createElement("a", {
    key: i,
    href: it.href,
    style: {
      textDecoration: "none",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: it.label === activeLabel ? "var(--neutral-900)" : "var(--text-secondary)",
      borderBottom: it.label === activeLabel ? "2px solid var(--brand-yellow-500)" : "2px solid transparent",
      paddingBottom: 4,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, it.label, it.children && React.createElement(__ds_scope.Icon, {
    name: "chevronDown",
    size: 14
  })))), React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: ctaHref
  }, ctaLabel));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.InfoCard = __ds_scope.InfoCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.FAQAccordion = __ds_scope.FAQAccordion;

__ds_ns.QuestionCard = __ds_scope.QuestionCard;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.InsurerStrip = __ds_scope.InsurerStrip;

__ds_ns.ReviewBadge = __ds_scope.ReviewBadge;

__ds_ns.TrustBar = __ds_scope.TrustBar;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
