const o={colors:{primary:"#006FEE",secondary:"#7828C8",success:"#17C964",warning:"#F5A524",danger:"#F31260",default:"#71717A"},fonts:{sans:"system-ui, sans-serif"},fontSizes:{sm:"0.875rem",md:"1rem",lg:"1.125rem"},space:{sm:"0.5rem",md:"1rem",lg:"1.5rem"},radii:{none:"0",sm:"0.125rem",md:"0.375rem",lg:"0.5rem",full:"9999px"}},s=()=>{const r=document.createElement("style");r.textContent=`
    :root {
      /* Colors */
      --vnl-colors-primary: ${o.colors.primary};
      --vnl-colors-secondary: ${o.colors.secondary};
      --vnl-colors-success: ${o.colors.success};
      --vnl-colors-warning: ${o.colors.warning};
      --vnl-colors-danger: ${o.colors.danger};
      --vnl-colors-default: ${o.colors.default};

      /* Radii */
      --vnl-radii-none: ${o.radii.none};
      --vnl-radii-sm: ${o.radii.sm};
      --vnl-radii-md: ${o.radii.md};
      --vnl-radii-lg: ${o.radii.lg};
      --vnl-radii-full: ${o.radii.full};

      /* Font Sizes */
      --vnl-font-size-sm: ${o.fontSizes.sm};
      --vnl-font-size-md: ${o.fontSizes.md};
      --vnl-font-size-lg: ${o.fontSizes.lg};

      /* Space */
      --vnl-space-sm: ${o.space.sm};
      --vnl-space-md: ${o.space.md};
      --vnl-space-lg: ${o.space.lg};
    }

    /* Automatic dark mode adjustments */
    @media (prefers-color-scheme: dark) {
      :root {
        --vnl-colors-primary: color-mix(in srgb, ${o.colors.primary} 90%, white);
        --vnl-colors-secondary: color-mix(in srgb, ${o.colors.secondary} 90%, white);
        --vnl-colors-success: color-mix(in srgb, ${o.colors.success} 90%, white);
        --vnl-colors-warning: color-mix(in srgb, ${o.colors.warning} 90%, white);
        --vnl-colors-danger: color-mix(in srgb, ${o.colors.danger} 90%, white);
        --vnl-colors-default: color-mix(in srgb, ${o.colors.default} 90%, white);
      }
    }
  `,document.head.appendChild(r)};typeof window<"u"&&s();export{o as t};
