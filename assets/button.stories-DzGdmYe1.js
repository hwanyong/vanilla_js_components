import{x as a}from"./lit-element-B-NARBzP.js";import{t as i}from"./index-DJUJitaP.js";const at=`
  :host {
    display: inline-block;
    position: relative;

    /* Color RGB values for current/hover effects */
    --primary-rgb: 0, 111, 238;
    --secondary-rgb: 120, 40, 200;
    --success-rgb: 23, 201, 100;
    --warning-rgb: 245, 165, 36;
    --danger-rgb: 243, 18, 96;
    --default-rgb: 113, 113, 122;
  }

  .vnl-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0 16px;
    border: 1px solid;
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
    transition: all 0.15s ease;
    overflow: hidden;
  }

  /* Add these styles for ripple */
  .vnl-button vnl-ripple {
    position: absolute;
    inset: 0;
    border-radius: inherit;
  }

  /* Direct size styles */
  .vnl-button {
    height: 40px;
    font-size: 1rem;
  }

  :host([vnl-size="sm"]) .vnl-button {
    height: 32px !important;
    font-size: 0.875rem !important;
    padding: 0 12px !important;
  }

  :host([vnl-size="lg"]) .vnl-button {
    height: 48px !important;
    font-size: 1.125rem !important;
    padding: 0 20px !important;
  }

  /* Direct radius styles */
  .vnl-button {
    border-radius: 0.375rem;
  }

  :host([vnl-radius="none"]) .vnl-button {
    border-radius: 0 !important;
  }

  :host([vnl-radius="sm"]) .vnl-button {
    border-radius: 0.125rem !important;
  }

  :host([vnl-radius="lg"]) .vnl-button {
    border-radius: 0.5rem !important;
  }

  :host([vnl-radius="full"]) .vnl-button {
    border-radius: 9999px !important;
  }

  /* Direct color styles for solid variant */
  :host([vnl-variant="solid"][vnl-color="primary"]) .vnl-button {
    background: rgb(var(--primary-rgb));
    color: white;
    border-color: rgb(var(--primary-rgb));
  }

  :host([vnl-variant="solid"][vnl-color="secondary"]) .vnl-button {
    background: rgb(var(--secondary-rgb));
    color: white;
    border-color: rgb(var(--secondary-rgb));
  }

  :host([vnl-variant="solid"][vnl-color="success"]) .vnl-button {
    background: rgb(var(--success-rgb));
    color: white;
    border-color: rgb(var(--success-rgb));
  }

  :host([vnl-variant="solid"][vnl-color="warning"]) .vnl-button {
    background: rgb(var(--warning-rgb));
    color: white;
    border-color: rgb(var(--warning-rgb));
  }

  :host([vnl-variant="solid"][vnl-color="danger"]) .vnl-button {
    background: rgb(var(--danger-rgb));
    color: white;
    border-color: rgb(var(--danger-rgb));
  }

  :host([vnl-variant="solid"][vnl-color="default"]) .vnl-button {
    background: #71717A;
    color: white;
    border-color: #71717A;
  }

  /* Hover states for solid variant */
  :host([vnl-variant="solid"][vnl-color="primary"]) .vnl-button:hover {
    background: #0054B4;
    border-color: #0054B4;
  }

  :host([vnl-variant="solid"][vnl-color="secondary"]) .vnl-button:hover {
    background: #5C1E9E;
    border-color: #5C1E9E;
  }

  :host([vnl-variant="solid"][vnl-color="success"]) .vnl-button:hover {
    background: #13A452;
    border-color: #13A452;
  }

  :host([vnl-variant="solid"][vnl-color="warning"]) .vnl-button:hover {
    background: #D48C1E;
    border-color: #D48C1E;
  }

  :host([vnl-variant="solid"][vnl-color="danger"]) .vnl-button:hover {
    background: #CC0E50;
    border-color: #CC0E50;
  }

  :host([vnl-variant="solid"][vnl-color="default"]) .vnl-button:hover {
    background: #52525B;
    border-color: #52525B;
  }

  /* Light variant styles */
  :host([vnl-variant="light"]) .vnl-button {
    background: transparent;
    border-color: transparent;
  }

  :host([vnl-variant="light"][vnl-color="primary"]) .vnl-button {
    color: rgb(var(--primary-rgb));
    background: rgba(0, 111, 238, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="secondary"]) .vnl-button {
    color: rgb(var(--secondary-rgb));
    background: rgba(120, 40, 200, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="success"]) .vnl-button {
    color: rgb(var(--success-rgb));
    background: rgba(23, 201, 100, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="warning"]) .vnl-button {
    color: rgb(var(--warning-rgb));
    background: rgba(245, 165, 36, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="danger"]) .vnl-button {
    color: rgb(var(--danger-rgb));
    background: rgba(243, 18, 96, 0.1);
  }

  :host([vnl-variant="light"][vnl-color="default"]) .vnl-button {
    color: #71717A;
    background: rgba(113, 113, 122, 0.1);
  }

  /* Bordered variant styles */
  :host([vnl-variant="bordered"]) .vnl-button {
    background: transparent;
  }

  :host([vnl-variant="bordered"][vnl-color="primary"]) .vnl-button {
    color: rgb(var(--primary-rgb));
    border-color: rgb(var(--primary-rgb));
  }

  :host([vnl-variant="bordered"][vnl-color="secondary"]) .vnl-button {
    color: rgb(var(--secondary-rgb));
    border-color: rgb(var(--secondary-rgb));
  }

  :host([vnl-variant="bordered"][vnl-color="success"]) .vnl-button {
    color: rgb(var(--success-rgb));
    border-color: rgb(var(--success-rgb));
  }

  :host([vnl-variant="bordered"][vnl-color="warning"]) .vnl-button {
    color: rgb(var(--warning-rgb));
    border-color: rgb(var(--warning-rgb));
  }

  :host([vnl-variant="bordered"][vnl-color="danger"]) .vnl-button {
    color: rgb(var(--danger-rgb));
    border-color: rgb(var(--danger-rgb));
  }

  :host([vnl-variant="bordered"][vnl-color="default"]) .vnl-button {
    color: #71717A;
    border-color: #71717A;
  }

  /* Flat variant styles */
  :host([vnl-variant="flat"]) .vnl-button {
    background: transparent;
    border-color: transparent;
  }

  :host([vnl-variant="flat"][vnl-color="primary"]) .vnl-button {
    color: rgb(var(--primary-rgb));
  }

  :host([vnl-variant="flat"][vnl-color="secondary"]) .vnl-button {
    color: rgb(var(--secondary-rgb));
  }

  :host([vnl-variant="flat"][vnl-color="success"]) .vnl-button {
    color: rgb(var(--success-rgb));
  }

  :host([vnl-variant="flat"][vnl-color="warning"]) .vnl-button {
    color: rgb(var(--warning-rgb));
  }

  :host([vnl-variant="flat"][vnl-color="danger"]) .vnl-button {
    color: rgb(var(--danger-rgb));
  }

  :host([vnl-variant="flat"][vnl-color="default"]) .vnl-button {
    color: #71717A;
  }

  :host([vnl-variant="flat"][vnl-color="primary"]) .vnl-button:hover {
    background: rgba(var(--primary-rgb), 0.1);
  }

  :host([vnl-variant="flat"][vnl-color="secondary"]) .vnl-button:hover {
    background: rgba(var(--secondary-rgb), 0.1);
  }

  :host([vnl-variant="flat"][vnl-color="success"]) .vnl-button:hover {
    background: rgba(var(--success-rgb), 0.1);
  }

  :host([vnl-variant="flat"][vnl-color="warning"]) .vnl-button:hover {
    background: rgba(var(--warning-rgb), 0.1);
  }

  :host([vnl-variant="flat"][vnl-color="danger"]) .vnl-button:hover {
    background: rgba(var(--danger-rgb), 0.1);
  }

  :host([vnl-variant="flat"][vnl-color="default"]) .vnl-button:hover {
    background: rgba(var(--default-rgb), 0.1);
  }

  /* Faded variant styles */
  :host([vnl-variant="faded"]) .vnl-button {
    background: transparent;
    border-color: transparent;
    opacity: 0.7;
  }

  :host([vnl-variant="faded"][vnl-color="primary"]) .vnl-button {
    color: rgb(var(--primary-rgb));
    background: rgba(0, 111, 238, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="secondary"]) .vnl-button {
    color: rgb(var(--secondary-rgb));
    background: rgba(120, 40, 200, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="success"]) .vnl-button {
    color: rgb(var(--success-rgb));
    background: rgba(23, 201, 100, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="warning"]) .vnl-button {
    color: rgb(var(--warning-rgb));
    background: rgba(245, 165, 36, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="danger"]) .vnl-button {
    color: rgb(var(--danger-rgb));
    background: rgba(243, 18, 96, 0.1);
  }

  :host([vnl-variant="faded"][vnl-color="default"]) .vnl-button {
    color: #71717A;
    background: rgba(113, 113, 122, 0.1);
  }

  :host([vnl-variant="faded"]) .vnl-button:hover {
    opacity: 1;
  }

  /* Shadow variant styles */
  :host([vnl-variant="shadow"]) .vnl-button {
    background: transparent;
    border-color: transparent;
  }

  :host([vnl-variant="shadow"][vnl-color="primary"]) .vnl-button {
    color: white;
    background: rgb(var(--primary-rgb));
    box-shadow: 0 4px 14px 0 rgba(0, 111, 238, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="secondary"]) .vnl-button {
    color: white;
    background: rgb(var(--secondary-rgb));
    box-shadow: 0 4px 14px 0 rgba(120, 40, 200, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="success"]) .vnl-button {
    color: white;
    background: rgb(var(--success-rgb));
    box-shadow: 0 4px 14px 0 rgba(23, 201, 100, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="warning"]) .vnl-button {
    color: white;
    background: rgb(var(--warning-rgb));
    box-shadow: 0 4px 14px 0 rgba(245, 165, 36, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="danger"]) .vnl-button {
    color: white;
    background: rgb(var(--danger-rgb));
    box-shadow: 0 4px 14px 0 rgba(243, 18, 96, 0.4);
  }

  :host([vnl-variant="shadow"][vnl-color="default"]) .vnl-button {
    color: white;
    background: #71717A;
    box-shadow: 0 4px 14px 0 rgba(113, 113, 122, 0.4);
  }

  :host([vnl-variant="shadow"]) .vnl-button:hover {
    transform: translateY(-2px);
  }

  /* Ghost variant styles */
  :host([vnl-variant="ghost"]) .vnl-button {
    background: transparent;
    border-color: transparent;
  }

  :host([vnl-variant="ghost"][vnl-color="primary"]) .vnl-button {
    border-color: rgb(var(--primary-rgb));
    color: rgb(var(--primary-rgb));
  }

  :host([vnl-variant="ghost"][vnl-color="secondary"]) .vnl-button {
    border-color: rgb(var(--secondary-rgb));
    color: rgb(var(--secondary-rgb));
  }

  :host([vnl-variant="ghost"][vnl-color="success"]) .vnl-button {
    border-color: rgb(var(--success-rgb));
    color: rgb(var(--success-rgb));
  }

  :host([vnl-variant="ghost"][vnl-color="warning"]) .vnl-button {
    border-color: rgb(var(--warning-rgb));
    color: rgb(var(--warning-rgb));
  }

  :host([vnl-variant="ghost"][vnl-color="danger"]) .vnl-button {
    border-color: rgb(var(--danger-rgb));
    color: rgb(var(--danger-rgb));
  }

  :host([vnl-variant="ghost"][vnl-color="default"]) .vnl-button {
    border-color: #71717A;
    color: #71717A;
  }

  :host([vnl-variant="ghost"]) .vnl-button:hover {
    background: rgba(var(--current-color-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="primary"]) .vnl-button:hover {
    background: rgba(var(--primary-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="secondary"]) .vnl-button:hover {
    background: rgba(var(--secondary-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="success"]) .vnl-button:hover {
    background: rgba(var(--success-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="warning"]) .vnl-button:hover {
    background: rgba(var(--warning-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="danger"]) .vnl-button:hover {
    background: rgba(var(--danger-rgb), 0.1);
  }

  :host([vnl-variant="ghost"][vnl-color="default"]) .vnl-button:hover {
    background: rgba(var(--default-rgb), 0.1);
  }

  /* States */
  :host([vnl-disabled]) .vnl-button {
    opacity: 0.5;
    pointer-events: none;
  }

  :host([vnl-loading]) .vnl-button {
    cursor: wait;
    pointer-events: none;
  }

  :host([vnl-fullwidth]) {
    display: block;
    width: 100%;

    & .vnl-button {
      width: 100%;
    }
  }

  /* Animation */
  :host(:not([vnl-disableAnimation])) .vnl-button:active {
    transform: scale(0.97);
  }

  /* Slots */
  ::slotted([slot="start-content"]) {
    margin-right: 0.5rem;
  }

  ::slotted([slot="end-content"]) {
    margin-left: 0.5rem;
  }

  /* Loading spinner */
  .spinner {
    position: absolute;
    width: 1em;
    height: 1em;
    border: 0.2em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,v={defaultProps:{variant:"solid",color:"primary",size:"md",radius:"md"},styles:{sizes:{sm:{fontSize:i.fontSizes.sm},md:{fontSize:i.fontSizes.md},lg:{fontSize:i.fontSizes.lg}},radius:{none:i.radii.none,sm:i.radii.sm,md:i.radii.md,lg:i.radii.lg,full:i.radii.full}}},lt=`
  :host {
    position: absolute;
    inset: 0;
    overflow: hidden;
    border-radius: inherit;
    pointer-events: none;
    z-index: 0;
  }

  :host([vnl-disabled]) {
    display: none;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    transform-origin: center;
    background: currentColor;
    opacity: 0.2;
    transform: scale(0);
    width: 100px;
    height: 100px;
    will-change: transform, opacity;
    animation: ripple-animation 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    from {
      transform: scale(0);
      opacity: 0.2;
    }
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;function et(n,t){const r=document.createElement("div");return r.className="ripple",r.style.left=`${n}px`,r.style.top=`${t}px`,r.style.transform="translate(-50%, -50%) scale(0)",r}class st extends HTMLElement{static get observedAttributes(){return["vnl-disabled"]}constructor(){super(),this.initializeShadowDOM()}initializeShadowDOM(){const t=this.attachShadow({mode:"open"}),r=document.createElement("style");r.textContent=lt,t.appendChild(r)}connectedCallback(){}addRipple(t,r){if(!this.shadowRoot)return;const o=this.shadowRoot.querySelector(".ripple");o&&o.remove();const l=et(t,r);l.addEventListener("animationend",()=>{l.remove()},{once:!0}),this.shadowRoot.appendChild(l)}}customElements.define("vnl-ripple",st);class it extends HTMLElement{constructor(){super(),this.ripple=null,this.button=null,this._initialize()}static get observedAttributes(){return["vnl-variant","vnl-color","vnl-size","vnl-radius","vnl-disabled","vnl-loading","vnl-fullwidth","vnl-icon","vnl-disableRipple","vnl-disableAnimation"]}_initialize(){const t=this.attachShadow({mode:"open"}),r=document.createElement("style");r.textContent=at,this.button=document.createElement("button"),this.button.setAttribute("part","button"),this.button.classList.add("vnl-button"),this._applyDefaultAttributes(),this.button.innerHTML=`
      <slot name="start-content" part="start-content"></slot>
      <span class="content" part="content">
        <slot></slot>
      </span>
      <slot name="end-content" part="end-content"></slot>
    `,t.appendChild(r),t.appendChild(this.button),this.hasAttribute("vnl-disableRipple")||(this.ripple=document.createElement("vnl-ripple"),this.button.appendChild(this.ripple)),this._setupEventListeners()}_applyDefaultAttributes(){const t=v.defaultProps;["variant","color","size","radius"].forEach(r=>{this.hasAttribute(`vnl-${r}`)||this.setAttribute(`vnl-${r}`,t[r])})}_setupEventListeners(){this.addEventListener("click",this._handleClick.bind(this)),this.addEventListener("mousedown",this._handleMouseDown.bind(this)),this.addEventListener("keydown",this._handleKeyInteraction.bind(this)),this.addEventListener("keyup",this._handleKeyInteraction.bind(this)),this.addEventListener("focus",this._handleFocus.bind(this)),this.addEventListener("blur",this._handleBlur.bind(this))}_handleClick(t){if(this.disabled||this.loading){t.preventDefault();return}this.dispatchEvent(new CustomEvent("vnl-press",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}_handleMouseDown(t){var c;if(this.disabled||this.loading||this.hasAttribute("vnl-disableRipple"))return;const r=this.ripple;if(!r||!r.shadowRoot)return;const o=(c=this.button)==null?void 0:c.getBoundingClientRect();if(!o)return;const l=t.clientX-o.left,e=t.clientY-o.top,s=document.createElement("div");s.className="ripple",s.style.left=`${l-50}px`,s.style.top=`${e-50}px`;const d=r.shadowRoot.querySelector(".ripple");d&&d.remove(),r.shadowRoot.appendChild(s),s.addEventListener("animationend",()=>{s.remove()},{once:!0}),this.dispatchEvent(new CustomEvent("vnl-pressstart",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}_handleKeyInteraction(t){var l;if(this.disabled||this.loading)return;const r=t.key==="Enter"||t.key===" ",o=t.key==="ArrowLeft"||t.key==="ArrowRight"||t.key==="ArrowUp"||t.key==="ArrowDown";if(r&&(t.preventDefault(),t.type==="keydown"?this.dispatchEvent(new CustomEvent("vnl-pressstart",{bubbles:!0,composed:!0,detail:{originalEvent:t}})):t.type==="keyup"&&(this.click(),this.dispatchEvent(new CustomEvent("vnl-pressend",{bubbles:!0,composed:!0,detail:{originalEvent:t}})))),o&&((l=this.parentElement)==null?void 0:l.tagName)==="VNL-BUTTON-GROUP"){t.preventDefault();const e=Array.from(this.parentElement.querySelectorAll("vnl-button")),s=e.indexOf(this);let d=s;switch(t.key){case"ArrowLeft":case"ArrowUp":d=s>0?s-1:e.length-1;break;case"ArrowRight":case"ArrowDown":d=s<e.length-1?s+1:0;break}e[d].focus()}}_handleFocus(t){this.disabled||this.loading||this.dispatchEvent(new CustomEvent("vnl-focus",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}_handleBlur(t){this.dispatchEvent(new CustomEvent("vnl-blur",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}get disabled(){return this.hasAttribute("vnl-disabled")}set disabled(t){this.toggleAttribute("vnl-disabled",t)}get loading(){return this.hasAttribute("vnl-loading")}set loading(t){this.toggleAttribute("vnl-loading",t)}get variant(){return this.getAttribute("vnl-variant")||v.defaultProps.variant}set variant(t){this.setAttribute("vnl-variant",t)}get color(){return this.getAttribute("vnl-color")||v.defaultProps.color}set color(t){this.setAttribute("vnl-color",t)}get size(){return this.getAttribute("vnl-size")||v.defaultProps.size}set size(t){this.setAttribute("vnl-size",t)}get fullwidth(){return this.hasAttribute("vnl-fullwidth")}set fullwidth(t){t?this.setAttribute("vnl-fullwidth","true"):this.removeAttribute("vnl-fullwidth")}get radius(){return this.getAttribute("vnl-radius")||v.defaultProps.radius}set radius(t){this.setAttribute("vnl-radius",t)}attributeChangedCallback(t,r,o){if(r!==o){if(!this.shadowRoot||!this.button){requestAnimationFrame(()=>{this.attributeChangedCallback(t,r,o)});return}switch(t){case"vnl-disabled":case"vnl-loading":this.button.disabled=this.disabled||this.loading;break;case"vnl-disableRipple":this.ripple&&(this.ripple.style.display=this.hasAttribute("vnl-disableRipple")?"none":"block");break;case"vnl-variant":case"vnl-color":case"vnl-size":case"vnl-radius":this.button.style.display=this.button.style.display;break}this.dispatchEvent(new CustomEvent("vnl-change",{bubbles:!0,composed:!0,detail:{name:t,oldValue:r,newValue:o}}))}}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","button")}}customElements.get("vnl-button")||customElements.define("vnl-button",it);const A={styles:{base:{display:"inline-flex",gap:"1px"},variants:{solid:{"::part(button)":{"&:not(:first-child)":{borderTopLeftRadius:"0",borderBottomLeftRadius:"0"},"&:not(:last-child)":{borderTopRightRadius:"0",borderBottomRightRadius:"0"}}},bordered:{gap:"0","::part(button)":{"&:not(:first-child)":{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",marginLeft:"-1px"},"&:not(:last-child)":{borderTopRightRadius:"0",borderBottomRightRadius:"0"},"&:hover":{zIndex:"1"},"&:focus-visible":{zIndex:"2"}}}}}};let dt=class extends HTMLElement{static get observedAttributes(){return["vnl-variant","vnl-color","vnl-size","vnl-radius","vnl-disabled"]}constructor(){super(),this._initialize()}_initialize(){const t=this.attachShadow({mode:"open"}),r=document.createElement("div");r.setAttribute("part","group"),r.setAttribute("role","group"),r.classList.add("vnl-button-group"),this.hasAttribute("aria-label")||this.setAttribute("aria-label","Button group"),r.innerHTML="<slot></slot>";const o=document.createElement("style");o.textContent=`
      :host {
        display: inline-block;
      }

      .vnl-button-group {
        ${Object.entries(A.styles.base).map(([l,e])=>`${l}: ${e};`).join(`;
`)}
      }

      ${Object.entries(A.styles.variants).map(([l,e])=>`
          :host([vnl-variant="${l}"]) ${e["::part(button)"]?"::slotted(vnl-button)":""} {
            ${Object.entries(e["::part(button)"]||{}).map(([s,d])=>`
                ${s} {
                  ${Object.entries(d).map(([c,ot])=>`${c}: ${ot};`).join(`;
`)}
                }
              `).join(`
`)}
          }
        `).join(`
`)}

      :host([vnl-fullwidth]) {
        display: block;
      }

      :host([vnl-fullwidth]) .vnl-button-group {
        display: flex;
        width: 100%;
      }

      :host([vnl-fullwidth]) ::slotted(vnl-button) {
        flex: 1;
      }

      /* Focus management styles */
      :host(:focus-within) {
        outline: none;
        box-shadow: 0 0 0 2px var(--button-focus-ring-color, rgba(0, 111, 238, 0.4));
      }
    `,t.appendChild(o),t.appendChild(r),this._syncChildrenAttributes(),this._setupKeyboardNavigation()}_setupKeyboardNavigation(){this.addEventListener("keydown",t=>{if(t.key==="Home"||t.key==="End"){t.preventDefault();const r=Array.from(this.querySelectorAll("vnl-button")),o=t.key==="Home"?r[0]:r[r.length-1];o==null||o.focus()}}),this.addEventListener("slotchange",()=>{Array.from(this.querySelectorAll("vnl-button")).forEach((r,o)=>{r.setAttribute("tabindex",o===0?"0":"-1")})})}_syncChildrenAttributes(){const t=Array.from(this.querySelectorAll("vnl-button"));t.forEach((r,o)=>{r.setAttribute("role","groupitem"),r.setAttribute("aria-setsize",t.length.toString()),r.setAttribute("aria-posinset",(o+1).toString()),["variant","color","size","radius","disabled"].forEach(l=>{const e=this.getAttribute(`vnl-${l}`);e!==null&&r.setAttribute(`vnl-${l}`,e)})})}attributeChangedCallback(t,r,o){r!==o&&this._syncChildrenAttributes()}connectedCallback(){new MutationObserver(()=>{this._syncChildrenAttributes()}).observe(this,{childList:!0,subtree:!0})}};customElements.define("vnl-button-group",dt);const pt={title:"Components/Button",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["solid","bordered","light","flat","faded","shadow","ghost"],description:"버튼의 시각적 스타일을 설정합니다",table:{defaultValue:{summary:"solid"},type:{summary:"string"}}},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"],description:"버튼의 색상 테마를 설정합니다"},size:{control:{type:"select"},options:["sm","md","lg"],description:"버튼의 크기를 설정합니다"},radius:{control:{type:"select"},options:["none","sm","md","lg","full"],description:"버튼의 모서리 반경을 설정합니다. none(0px), sm(2px), md(6px), lg(8px), full(9999px)",table:{defaultValue:{summary:"md"},type:{summary:"string"}}},disabled:{control:"boolean",description:"버튼의 비활성화 상태를 설정합니다"},loading:{control:"boolean",description:"버튼의 로딩 상태를 설정합니다"},fullWidth:{control:"boolean",description:"버튼의 전체 너비 모드를 설정합니다"},disableAnimation:{control:"boolean",description:"버튼의 애니메이션을 비활성화합니다"},disableRipple:{control:"boolean",description:"버튼의 물결 효과를 비활성화합니다"}},parameters:{layout:"centered",docs:{description:{component:"`vnl-button`은 웹 컴포넌트 기반의 버튼 요소입니다. NextUI와 shadcn/ui에서 영감을 받아 구현되었습니다."}},a11y:{config:{rules:[{id:"button-name",enabled:!0}]}}}},vt=n=>a`
  <vnl-button
    ?vnl-disabled=${n.disabled}
    ?vnl-loading=${n.loading}
    ?vnl-fullwidth=${n.fullWidth}
    ?vnl-disableAnimation=${n.disableAnimation}
    ?vnl-disableRipple=${n.disableRipple}
    vnl-variant=${n.variant||"solid"}
    vnl-color=${n.color||"primary"}
    vnl-size=${n.size||"md"}
    vnl-radius=${n.radius||"md"}
  >
    ${n.content||"Button"}
  </vnl-button>
`,u=vt.bind({});u.args={content:"Button"};const b=()=>a`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    ${["solid","bordered","light","flat","faded","shadow","ghost"].map(n=>a`
        <vnl-button vnl-variant=${n}>
          ${n}
        </vnl-button>
      `)}
  </div>
`,p=()=>a`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    ${["default","primary","secondary","success","warning","danger"].map(n=>a`
        <vnl-button vnl-color=${n}>
          ${n}
        </vnl-button>
      `)}
  </div>
`,g=()=>a`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    ${["none","sm","md","lg","full"].map(n=>a`
        <vnl-button
          vnl-radius=${n}
          vnl-color="primary"
          vnl-variant="shadow"
          vnl-size="lg"
        >
          radius-${n}
        </vnl-button>
      `)}
  </div>
`,h=n=>a`
  <div style="display: flex; gap: 1rem; align-items: center;">
    <vnl-button
      vnl-variant=${n.variant||"solid"}
      vnl-color=${n.color||"primary"}
    >
      <span slot="start-content">👈</span>
      ${n.content||"With Start Icon"}
    </vnl-button>

    <vnl-button
      vnl-variant=${n.variant||"solid"}
      vnl-color=${n.color||"primary"}
    >
      ${n.content||"With End Icon"}
      <span slot="end-content">👉</span>
    </vnl-button>

    <vnl-button
      vnl-variant=${n.variant||"solid"}
      vnl-color=${n.color||"primary"}
      vnl-icon
    >
      🔔
    </vnl-button>
  </div>
`,m=()=>a`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <vnl-button vnl-disabled>Disabled</vnl-button>
    <vnl-button vnl-loading>Loading</vnl-button>
    <vnl-button vnl-disableRipple>No Ripple</vnl-button>
    <vnl-button vnl-disableAnimation>No Animation</vnl-button>
  </div>
`,f=n=>a`
  <vnl-button-group
    vnl-variant=${n.variant||"solid"}
    vnl-color=${n.color||"primary"}
  >
    <vnl-button>One</vnl-button>
    <vnl-button>Two</vnl-button>
    <vnl-button>Three</vnl-button>
  </vnl-button-group>
`,y=()=>a`
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <vnl-button aria-label="Close dialog">
      ✕
    </vnl-button>

    <vnl-button-group aria-label="Text alignment">
      <vnl-button aria-label="Align left">⌫</vnl-button>
      <vnl-button aria-label="Align center">≡</vnl-button>
      <vnl-button aria-label="Align right">⌦</vnl-button>
    </vnl-button-group>

    <vnl-button vnl-loading aria-busy="true">
      Processing
    </vnl-button>
  </div>
`,w=()=>a`
  <style>
    .custom-button::part(button) {
      background: linear-gradient(45deg, ${i.colors.primary}, ${i.colors.secondary});
      border: none;
      color: white;
      font-weight: bold;
      transition: transform 0.2s;
    }
    .custom-button::part(button):hover {
      transform: translateY(-2px);
    }
  </style>
  <vnl-button class="custom-button">
    Custom Styled
  </vnl-button>
`,x=()=>a`
  <style>
    .radius-showcase {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem;
    }
    .radius-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .radius-section h3 {
      margin: 0;
      color: #666;
      font-weight: 600;
      font-size: 1.1rem;
    }
    .radius-row {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }
    .radius-label {
      min-width: 100px;
      color: #666;
      font-size: 0.9rem;
    }
  </style>
  <div class="radius-showcase">
    <div class="radius-section">
      <h3>Basic Radius Variants</h3>
      <div class="radius-row">
        ${["none","sm","md","lg","full"].map(n=>a`
            <vnl-button
              vnl-radius=${n}
              vnl-color="primary"
              vnl-variant="solid"
              vnl-size="lg"
            >
              radius-${n}
            </vnl-button>
          `)}
      </div>
    </div>

    <div class="radius-section">
      <h3>Radius with Different Variants</h3>
      ${["solid","bordered","light","flat","faded","shadow","ghost"].map(n=>a`
          <div class="radius-row">
            <div class="radius-label">${n}:</div>
            ${["none","sm","md","lg","full"].map(t=>a`
                <vnl-button
                  vnl-radius=${t}
                  vnl-color="primary"
                  vnl-variant=${n}
                >
                  ${t}
                </vnl-button>
              `)}
          </div>
        `)}
    </div>

    <div class="radius-section">
      <h3>Radius with Different Colors</h3>
      ${["primary","secondary","success","warning","danger","default"].map(n=>a`
          <div class="radius-row">
            <div class="radius-label">${n}:</div>
            ${["none","sm","md","lg","full"].map(t=>a`
                <vnl-button
                  vnl-radius=${t}
                  vnl-color=${n}
                  vnl-variant="shadow"
                >
                  ${t}
                </vnl-button>
              `)}
          </div>
        `)}
    </div>
  </div>
`,$=()=>a`
  <style>
    .fixed-size-button {
      width: 200px;
    }
    .radius-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit);
      gap: 1rem;
    }
  </style>
  <div class="radius-grid">
    ${["none","sm","md","lg","full"].map(n=>a`
        <vnl-button
          class="fixed-size-button"
          vnl-radius=${n}
          vnl-color="primary"
          vnl-variant="bordered"
        >
          radius-${n}
          <br>
          <small style="opacity: 0.8">
            ${n==="none"?"0px":n==="sm"?"2px":n==="md"?"6px":n==="lg"?"8px":"9999px"}
          </small>
        </vnl-button>
      `)}
  </div>
`;var k,E,R;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`args => html\`
  <vnl-button
    ?vnl-disabled=\${args.disabled}
    ?vnl-loading=\${args.loading}
    ?vnl-fullwidth=\${args.fullWidth}
    ?vnl-disableAnimation=\${args.disableAnimation}
    ?vnl-disableRipple=\${args.disableRipple}
    vnl-variant=\${args.variant || 'solid'}
    vnl-color=\${args.color || 'primary'}
    vnl-size=\${args.size || 'md'}
    vnl-radius=\${args.radius || 'md'}
  >
    \${args.content || 'Button'}
  </vnl-button>
\``,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var C,z,S;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`() => html\`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    \${['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'].map(variant => html\`
        <vnl-button vnl-variant=\${variant}>
          \${variant}
        </vnl-button>
      \`)}
  </div>
\``,...(S=(z=b.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var L,_,B;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => html\`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    \${['default', 'primary', 'secondary', 'success', 'warning', 'danger'].map(color => html\`
        <vnl-button vnl-color=\${color}>
          \${color}
        </vnl-button>
      \`)}
  </div>
\``,...(B=(_=p.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var D,T,I;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`() => html\`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    \${['none', 'sm', 'md', 'lg', 'full'].map(radius => html\`
        <vnl-button
          vnl-radius=\${radius}
          vnl-color="primary"
          vnl-variant="shadow"
          vnl-size="lg"
        >
          radius-\${radius}
        </vnl-button>
      \`)}
  </div>
\``,...(I=(T=g.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var N,O,W;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`args => html\`
  <div style="display: flex; gap: 1rem; align-items: center;">
    <vnl-button
      vnl-variant=\${args.variant || 'solid'}
      vnl-color=\${args.color || 'primary'}
    >
      <span slot="start-content">👈</span>
      \${args.content || 'With Start Icon'}
    </vnl-button>

    <vnl-button
      vnl-variant=\${args.variant || 'solid'}
      vnl-color=\${args.color || 'primary'}
    >
      \${args.content || 'With End Icon'}
      <span slot="end-content">👉</span>
    </vnl-button>

    <vnl-button
      vnl-variant=\${args.variant || 'solid'}
      vnl-color=\${args.color || 'primary'}
      vnl-icon
    >
      🔔
    </vnl-button>
  </div>
\``,...(W=(O=h.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var M,j,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`() => html\`
  <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <vnl-button vnl-disabled>Disabled</vnl-button>
    <vnl-button vnl-loading>Loading</vnl-button>
    <vnl-button vnl-disableRipple>No Ripple</vnl-button>
    <vnl-button vnl-disableAnimation>No Animation</vnl-button>
  </div>
\``,...(P=(j=m.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var F,G,H;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`args => html\`
  <vnl-button-group
    vnl-variant=\${args.variant || 'solid'}
    vnl-color=\${args.color || 'primary'}
  >
    <vnl-button>One</vnl-button>
    <vnl-button>Two</vnl-button>
    <vnl-button>Three</vnl-button>
  </vnl-button-group>
\``,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var q,K,V;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`() => html\`
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <vnl-button aria-label="Close dialog">
      ✕
    </vnl-button>

    <vnl-button-group aria-label="Text alignment">
      <vnl-button aria-label="Align left">⌫</vnl-button>
      <vnl-button aria-label="Align center">≡</vnl-button>
      <vnl-button aria-label="Align right">⌦</vnl-button>
    </vnl-button-group>

    <vnl-button vnl-loading aria-busy="true">
      Processing
    </vnl-button>
  </div>
\``,...(V=(K=y.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var U,Y,X;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`() => html\`
  <style>
    .custom-button::part(button) {
      background: linear-gradient(45deg, \${theme.colors.primary}, \${theme.colors.secondary});
      border: none;
      color: white;
      font-weight: bold;
      transition: transform 0.2s;
    }
    .custom-button::part(button):hover {
      transform: translateY(-2px);
    }
  </style>
  <vnl-button class="custom-button">
    Custom Styled
  </vnl-button>
\``,...(X=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var J,Q,Z;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`() => html\`
  <style>
    .radius-showcase {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem;
    }
    .radius-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .radius-section h3 {
      margin: 0;
      color: #666;
      font-weight: 600;
      font-size: 1.1rem;
    }
    .radius-row {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }
    .radius-label {
      min-width: 100px;
      color: #666;
      font-size: 0.9rem;
    }
  </style>
  <div class="radius-showcase">
    <div class="radius-section">
      <h3>Basic Radius Variants</h3>
      <div class="radius-row">
        \${['none', 'sm', 'md', 'lg', 'full'].map(radius => html\`
            <vnl-button
              vnl-radius=\${radius}
              vnl-color="primary"
              vnl-variant="solid"
              vnl-size="lg"
            >
              radius-\${radius}
            </vnl-button>
          \`)}
      </div>
    </div>

    <div class="radius-section">
      <h3>Radius with Different Variants</h3>
      \${['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'].map(variant => html\`
          <div class="radius-row">
            <div class="radius-label">\${variant}:</div>
            \${['none', 'sm', 'md', 'lg', 'full'].map(radius => html\`
                <vnl-button
                  vnl-radius=\${radius}
                  vnl-color="primary"
                  vnl-variant=\${variant}
                >
                  \${radius}
                </vnl-button>
              \`)}
          </div>
        \`)}
    </div>

    <div class="radius-section">
      <h3>Radius with Different Colors</h3>
      \${['primary', 'secondary', 'success', 'warning', 'danger', 'default'].map(color => html\`
          <div class="radius-row">
            <div class="radius-label">\${color}:</div>
            \${['none', 'sm', 'md', 'lg', 'full'].map(radius => html\`
                <vnl-button
                  vnl-radius=\${radius}
                  vnl-color=\${color}
                  vnl-variant="shadow"
                >
                  \${radius}
                </vnl-button>
              \`)}
          </div>
        \`)}
    </div>
  </div>
\``,...(Z=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var tt,nt,rt;$.parameters={...$.parameters,docs:{...(tt=$.parameters)==null?void 0:tt.docs,source:{originalSource:`() => html\`
  <style>
    .fixed-size-button {
      width: 200px;
    }
    .radius-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit);
      gap: 1rem;
    }
  </style>
  <div class="radius-grid">
    \${['none', 'sm', 'md', 'lg', 'full'].map(radius => html\`
        <vnl-button
          class="fixed-size-button"
          vnl-radius=\${radius}
          vnl-color="primary"
          vnl-variant="bordered"
        >
          radius-\${radius}
          <br>
          <small style="opacity: 0.8">
            \${radius === 'none' ? '0px' : radius === 'sm' ? '2px' : radius === 'md' ? '6px' : radius === 'lg' ? '8px' : '9999px'}
          </small>
        </vnl-button>
      \`)}
  </div>
\``,...(rt=(nt=$.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};const gt=["Default","AllVariants","AllColors","AllRadiusVariants","WithIcon","States","ButtonGroup","Accessibility","CustomStyling","RadiusShowcase","RadiusWithFixedSize"];export{y as Accessibility,p as AllColors,g as AllRadiusVariants,b as AllVariants,f as ButtonGroup,w as CustomStyling,u as Default,x as RadiusShowcase,$ as RadiusWithFixedSize,m as States,h as WithIcon,gt as __namedExportsOrder,pt as default};
