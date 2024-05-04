module.exports = {
  docs: [
    {
      type: "category",
      label: "💡 Getting Started",
      collapsed: false,
      items: [
        "introduction",
        {
          type: "category",
          label: "🚀 Get started",
          collapsed: false,
          items: [
            {
              type: "category",
              label: "📦 Installation",
              collapsed: false,
              items: [
                "installation/windows",
                "installation/macos",
                "installation/linux",
              ],
            },
            "installation/fonts",
            "installation/prompt",
            "installation/customize",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "⚙️ Configuration",
      items: [
        "configuration/general",
        "configuration/block",
        "configuration/segment",
        "configuration/sample",
        "configuration/title",
        "configuration/colors",
        "configuration/templates",
        "configuration/secondary-prompt",
        "configuration/debug-prompt",
        "configuration/transient",
        "configuration/line-error",
        "configuration/tooltips",
      ],
    },
    {
      type: "category",
      label: "🌟 Segments",
      collapsed: true,
      items: [
        "segments/angular",
        "segments/argocd",
        "segments/aws",
        "segments/az",
        "segments/azfunc",
        "segments/battery",
        "segments/bazel",
        "segments/brewfather",
        "segments/buf",
        "segments/carbonintensity",
        "segments/cds",
        "segments/cf",
        "segments/cftarget",
        "segments/cmake",
        "segments/command",
        "segments/connection",
        "segments/crystal",
        "segments/dart",
        "segments/deno",
        "segments/docker",
        "segments/dotnet",
        "segments/elixir",
        "segments/executiontime",
        "segments/flutter",
        "segments/fossil",
        "segments/gcp",
        "segments/firebase",
        "segments/git",
        "segments/gitversion",
        "segments/golang",
        "segments/haskell",
        "segments/helm",
        "segments/ipify",
        "segments/iterm",
        "segments/java",
        "segments/julia",
        "segments/kotlin",
        "segments/kubectl",
        "segments/lastfm",
        "segments/lua",
        "segments/mercurial",
        "segments/nbgv",
        "segments/nightscout",
        "segments/node",
        "segments/npm",
        "segments/nx",
        "segments/ocaml",
        "segments/os",
        "segments/owm",
        "segments/path",
        "segments/perl",
        "segments/php",
        "segments/plastic",
        "segments/project",
        "segments/pulumi",
        "segments/python",
        "segments/quasar",
        "segments/r",
        "segments/react",
        "segments/root",
        "segments/ruby",
        "segments/rust",
        "segments/sapling",
        "segments/session",
        "segments/shell",
        "segments/sitecore",
        "segments/spotify",
        "segments/status",
        "segments/strava",
        "segments/svn",
        "segments/swift",
        "segments/sysinfo",
        "segments/talosctl",
        "segments/terraform",
        "segments/text",
        "segments/time",
        "segments/ui5tooling",
        "segments/umbraco",
        "segments/unity",
        "segments/upgrade",
        "segments/vala",
        "segments/wakatime",
        "segments/withings",
        "segments/winreg",
        "segments/xmake",
        "segments/ytm",
      ],
    },
    {
      type: "category",
      label: "🙋🏾‍♀️ Contributing",
      collapsed: true,
      items: [
        "contributing/started",
        "contributing/segment",
        "contributing/git",
        "contributing/plastic",
      ],
    },
    "themes",
    "share",
    "faq",
    "migrating",
    "contributors",
  ],
};
