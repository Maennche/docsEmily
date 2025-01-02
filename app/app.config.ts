export default defineAppConfig({
  ui: {
    primary: 'red',
    gray: 'slate',

    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    },

    icons: {
      search: 'i-material-symbols-search-rounded',
      dark: 'i-material-symbols-dark-mode-outline-rounded',
      light: 'i-material-symbols-wb-sunny-outline-rounded',
      external: 'i-material-symbols-link-rounded',
      chevron: 'i-material-symbols-chevron-right-rounded',
      hash: 'i-material-symbols-tag-rounded'
    }
  },
  seo: {
    siteName: 'Maennche Studio - AI First CRM'
  },
  header: {
    logo: {
      alt: 'Maennche Studio',
      light: '/maennche-full-color_150.png',
      dark: '/maennche_1-inverse_150.png'
    },
    search: '',
    colorMode: true,
    links: [{
      label: 'Home',
      to: 'https://maennche-docs-emily.nuxt.space',
      'aria-label': 'Maennche Studio Home Page'
    }, {
      label: 'Pricing',
      to: 'https://maennche-docs-emily.nuxt.space/pricing',
      'aria-label': 'Maennche Studio Contact Page'
    }, {
      label: 'FAQ',
      to: 'https://maennche-docs-emily.nuxt.space/faq',
      'aria-label': 'Maennche Studio Contact Page'
    }, {
      label: 'Contact',
      to: 'https://maennche-docs-emily.nuxt.space/contact',
      'aria-label': 'Maennche Studio Contact Page'
    }]
  },
  footer: {
    credits: 'Copyright © 2025',
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-nuxtdotjs',
      'to': 'https://nuxt.com',
      'target': '_blank',
      'aria-label': 'Nuxt Website'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.com/invite/ps2h6QT',
      'target': '_blank',
      'aria-label': 'Nuxt UI on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/nuxt_js',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nuxt/ui',
      'target': '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank'
      }]
    }
  }
})