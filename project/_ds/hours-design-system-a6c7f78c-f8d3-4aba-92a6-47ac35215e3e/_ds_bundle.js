/* @ds-bundle: {"format":4,"namespace":"HoursDesignSystem_a6c7f7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Band","sourcePath":"components/core/Band.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Quote","sourcePath":"components/core/Quote.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"bc34835fb952","components/core/Band.jsx":"b292104c8ff4","components/core/Button.jsx":"adbf8b970a54","components/core/Card.jsx":"47823ebe31e9","components/core/Input.jsx":"52466ff10ca8","components/core/Logo.jsx":"f22204e63c7b","components/core/Quote.jsx":"a255f0a75f79","components/core/Stat.jsx":"ea0277c43ea0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HoursDesignSystem_a6c7f7 = window.HoursDesignSystem_a6c7f7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hours Badge — a soft, low-contrast pill for status, tags, and labels.
 * Tinted backgrounds drawn from the palette at low opacity; calm, never loud.
 */
function Badge({
  children,
  tone = 'coral',
  subtle = true,
  style = {},
  ...rest
}) {
  const tones = {
    coral: {
      fg: 'var(--coral-deep)',
      bg: 'rgba(242,112,89,0.12)'
    },
    teal: {
      fg: '#2A8A83',
      bg: 'rgba(61,184,176,0.14)'
    },
    sky: {
      fg: '#3D7BC4',
      bg: 'rgba(107,163,232,0.14)'
    },
    lavender: {
      fg: '#6E61A8',
      bg: 'rgba(155,143,212,0.16)'
    },
    amber: {
      fg: '#B8722A',
      bg: 'rgba(242,158,76,0.16)'
    },
    neutral: {
      fg: 'var(--ink-700)',
      bg: 'var(--ink-100)'
    }
  };
  const t = tones[tone] || tones.coral;
  const solid = {
    coral: '#fff',
    teal: '#fff',
    sky: '#fff',
    lavender: '#fff',
    amber: '#fff',
    neutral: '#fff'
  };
  const solidBg = {
    coral: 'var(--coral)',
    teal: 'var(--teal)',
    sky: 'var(--sky)',
    lavender: 'var(--lavender)',
    amber: 'var(--amber)',
    neutral: 'var(--navy)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '0.02em',
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      lineHeight: 1.4,
      color: subtle ? t.fg : solid[tone],
      background: subtle ? t.bg : solidBg[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Band.jsx
try { (() => {
/**
 * Hours Band — the calm gradient strip. A subtle half-sun and wordmark rest
 * on the left, one light message floats in the middle, a whispered URL sits
 * right. Colors transition gently peach → coral → lavender under grain.
 * Use as a pre-footer, deck closer, or document sign-off.
 */
function Band({
  message,
  url,
  name = 'Hours',
  showLogo = true,
  height = 110,
  pill = true,
  grain = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-2xl)',
      background: 'var(--gradient-strip)',
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '0 48px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, grain && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'var(--grain)',
      backgroundSize: '128px'
    }
  }), showLogo && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      opacity: 0.65,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 13,
      background: '#fff',
      borderRadius: '26px 26px 0 0',
      display: 'inline-block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      color: '#fff',
      letterSpacing: '0.04em'
    }
  }, name)), message ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 300,
      color: '#fff',
      letterSpacing: '0.05em'
    }
  }, message) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), url && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontSize: 11,
      fontWeight: 400,
      color: 'var(--light-300)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      flexShrink: 0
    }
  }, url));
}
Object.assign(__ds_scope, { Band });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Band.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hours Button — calm, rounded, never shouty.
 * Primary uses the coral; secondary is a soft outline; ghost is text-only.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = true,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 13,
      padding: '8px 16px',
      gap: 7
    },
    md: {
      fontSize: 15,
      padding: '11px 22px',
      gap: 8
    },
    lg: {
      fontSize: 17,
      padding: '15px 30px',
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--coral)',
      color: '#fff',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--navy)',
      border: '1px solid var(--ink-200)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--coral-deep)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'var(--cream-warm)',
      color: 'var(--navy)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--coral-deep)'
  } : variant === 'secondary' ? {
    borderColor: 'var(--ink-400)',
    background: 'var(--ink-100)'
  } : variant === 'ghost' ? {
    background: 'var(--ink-100)'
  } : {
    background: '#fff'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    disabled: disabled,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: s.fontSize,
      padding: s.padding,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      letterSpacing: '0.01em',
      lineHeight: 1,
      transform: press ? 'scale(0.97)' : 'scale(1)',
      transition: 'background var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft)',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hours Card — the base surface. Warm cream, soft corners, diffuse shadow,
 * optional grain film. Quiet by default; `tone="gradient"` for the occasional
 * warm hero panel; `tone="glass"` for floating content ON a gradient —
 * everything on glass is white.
 */
function Card({
  children,
  tone = 'cream',
  grain = false,
  padding = 24,
  style = {},
  ...rest
}) {
  const tones = {
    cream: {
      background: 'var(--white)',
      color: 'var(--navy)',
      border: '1px solid var(--ink-100)',
      boxShadow: 'var(--shadow-md)'
    },
    canvas: {
      background: 'var(--cream)',
      color: 'var(--navy)',
      border: '1px solid var(--ink-100)',
      boxShadow: 'none'
    },
    dark: {
      background: 'var(--navy-soft)',
      color: '#fff',
      border: '1px solid var(--light-200)',
      boxShadow: 'var(--shadow-lg)'
    },
    gradient: {
      background: 'var(--gradient-warm)',
      color: 'var(--navy)',
      border: 'none',
      boxShadow: 'var(--shadow-md)'
    },
    glass: {
      background: 'var(--glass-fill)',
      color: '#fff',
      border: '1px solid var(--glass-border)',
      boxShadow: 'none',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      borderRadius: 'var(--radius-lg)'
    }
  };
  const t = tones[tone] || tones.cream;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      ...t,
      ...style
    }
  }, rest), grain && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'var(--grain)',
      backgroundSize: '128px',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hours Input — a calm, rounded text field with an optional label and hint.
 * Soft hairline border; coral focus ring (gentle glow, no harsh outline).
 */
function Input({
  label,
  hint,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--ink-700)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--navy)',
      background: disabled ? 'var(--ink-100)' : 'var(--cream-warm)',
      border: `1px solid ${focus ? 'var(--coral)' : 'var(--ink-200)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '11px 14px',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-glow)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-400)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
/**
 * Hours Logo — the sunrise mark plus the "Hours" wordmark.
 * `mark` renders just the icon; `lockup` the full horizontal lockup.
 * Colour adapts to surface: gradient mark on light, white mark on dark.
 */
function Logo({
  variant = 'lockup',
  onDark = false,
  size = 36,
  showTagline = false,
  style = {}
}) {
  const markColor = onDark ? '#fff' : 'url(#steadyMarkGrad)';
  const lineStroke = onDark ? 'rgba(255,255,255,0.18)' : 'rgba(30,42,58,0.15)';
  const textColor = onDark ? '#fff' : 'var(--navy)';
  const Mark = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 80 80",
    fill: "none",
    style: {
      display: 'block',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 46 A24 24 0 0 1 64 46",
    fill: markColor,
    opacity: "0.92"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "46",
    x2: "72",
    y2: "46",
    stroke: lineStroke,
    strokeWidth: "0.8"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "steadyMarkGrad",
    x1: "16",
    y1: "46",
    x2: "64",
    y2: "20",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#F27059"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "55%",
    stopColor: "#C85C8E"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#9B8FD4"
  }))));
  if (variant === 'mark') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        ...style
      }
    }, Mark);
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.4,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, Mark, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.82,
      fontWeight: 300,
      letterSpacing: '0.04em',
      color: textColor
    }
  }, "Hours"), showTagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.36,
      fontWeight: 300,
      letterSpacing: '0.09em',
      color: onDark ? 'rgba(255,255,255,0.55)' : 'rgba(30,42,58,0.55)',
      marginTop: size * 0.16
    }
  }, "Get your time back.")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Quote.jsx
try { (() => {
/**
 * Hours Quote — the floating gradient quote card. One big, light, white line
 * resting low on a warm grained gradient. The brand's most shareable surface:
 * taglines, client words, closing moments.
 */
function Quote({
  children,
  attribution,
  tone = 'warm',
  align = 'start',
  size = 44,
  minHeight = 320,
  quotes = true,
  grain = true,
  style = {}
}) {
  const tones = {
    warm: 'var(--gradient-warm)',
    sunrise: 'var(--gradient-sunrise)',
    glass: 'var(--gradient-glass)',
    dawn: 'var(--gradient-dawn)'
  };
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      background: tones[tone] || tones.warm,
      minHeight,
      display: 'flex',
      fontFamily: 'var(--font-sans)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, grain && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'var(--grain)',
      backgroundSize: '128px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: center ? 'center' : 'flex-end',
      alignItems: center ? 'center' : 'flex-start',
      textAlign: center ? 'center' : 'left',
      padding: '48px 52px',
      gap: attribution ? 20 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size,
      fontWeight: 300,
      lineHeight: 1.25,
      letterSpacing: '-0.015em',
      color: '#fff',
      maxWidth: '16em'
    }
  }, quotes ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u201C", children, "\u201D") : children), attribution && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'var(--light-500)'
    }
  }, attribution)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/**
 * Hours Stat — a single headline metric with a quiet label. The brand's way
 * of showing the prize (time saved) without slop. Big light number, calm label.
 *
 * On gradient or glass surfaces always use `tone="light"` — text on gradients
 * is white, never coral or navy (palette colors disappear into the sunrise).
 * `onDark` lightens just the label when a colored value sits on a navy panel.
 */
function Stat({
  value,
  label,
  tone = 'coral',
  align = 'left',
  size = 44,
  inline = false,
  onDark = false,
  style = {}
}) {
  const tones = {
    coral: 'var(--coral)',
    teal: 'var(--teal)',
    sky: 'var(--sky)',
    lavender: 'var(--lavender)',
    ink: 'var(--navy)',
    light: '#FFFFFF'
  };
  const dark = onDark || tone === 'light';
  const valueStyle = {
    fontSize: size,
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    color: tones[tone] || tones.coral
  };
  const labelStyle = {
    fontSize: inline ? 13 : 12,
    fontWeight: inline ? 400 : 500,
    letterSpacing: '0.04em',
    color: dark ? 'var(--light-700)' : 'var(--ink-500)'
  };
  if (inline) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        fontFamily: 'var(--font-sans)',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: valueStyle
    }, value), /*#__PURE__*/React.createElement("span", {
      style: labelStyle
    }, label));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textAlign: align,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: valueStyle
  }, value), /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Band = __ds_scope.Band;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Stat = __ds_scope.Stat;

})();
