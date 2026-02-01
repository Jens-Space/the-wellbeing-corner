# 🌱 The Wellbeing Corner

The Wellbeing Corner is an inclusive, compassionate website built with **Next.js**, designed to support **adults, teens, and children**, including those affected by **chronic pain, invisible illness, and mood disorders**.

This project focuses on education, validation, accessibility, and safe signposting — not diagnosis or treatment.

---

## 🚀 Deployment on GitHub Pages

This project is configured for static export and can be deployed to GitHub Pages.

### Prerequisites

1. **Node.js** (v18 or higher)
2. **Git** installed

### Installation

```bash
# Install dependencies
npm install

# Install gh-pages for deployment
npm install -D gh-pages
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This generates static files in the `out` directory.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build the static site
2. Deploy the contents of the `out` directory to the `gh-pages` branch

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the static site
npm run build

# Deploy to gh-pages branch
npx gh-pages -d out
```

### GitHub Actions (Optional)

To set up automatic deployment on push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then enable GitHub Pages in your repository settings:
- Go to Settings → Pages
- Source: Select "GitHub Actions"

### Custom Domain (Optional)

If using a custom domain, create a `CNAME` file in the root directory:

```
yourdomain.com
```

Then in `next.config.js`, uncomment and set:

```javascript
basePath: '/your-repo-name',
```

---

## 💙 Mission Statement

The Wellbeing Corner exists to provide a safe, supportive space for people of all ages to learn about mental health and understand their experiences without judgement.

Mental health is shaped by many factors — trauma, life events, chronic pain, invisible illness, disability, and social pressures. Whether struggles are visible or hidden, short-term or lifelong, every experience is valid.

Our mission is to reduce stigma, increase understanding, and remind people that **they are not alone**.

> This website provides support and education and does not replace professional mental health care.

---

## 🌍 What This Website Covers

* Adult mental health support
* Teen mental health support
* Children & family emotional wellbeing
* **Mood disorders** (bipolar, cyclothymia, depressive disorders)
* Depression and anxiety disorders
* PTSD and trauma-related conditions
* Neurodivergent mental health experiences
* Mental health linked to chronic pain and invisible illness
* UK-based crisis and support resources

---

## 🏠 Homepage Pages & Navigation

| Page                        | Route              |
| --------------------------- | ------------------ |
| Home                        | `/`                |
| Adult Support               | `/adults`          |
| Teen Support                | `/teens`           |
| Children & Families         | `/children`        |
| Mood Disorders              | `/mood-disorders`  |
| Chronic & Invisible Illness | `/chronic-illness` |
| UK Resources                | `/resources`       |

---

## 🧠 Adult Support Page (`/adults`)

### Purpose

Support for adults experiencing mental health challenges related to life stress, trauma, physical health, relationships, parenting, work, or long-term conditions.

### Topics Covered

* Depression and low mood
* Anxiety and panic
* PTSD and trauma
* Stress and burnout
* Grief and loss
* Mental health and chronic pain
* Living with invisible illness

### Features

* Educational articles
* Coping strategies
* Grounding techniques
* Signposting to UK support

---

## 🧑 Teen Support Page (`/teens`)

### Purpose

A safe, age-appropriate space for teenagers to understand their mental health and emotions without judgement.

### Topics Covered

* School and exam stress
* Anxiety and depression
* Social media pressure
* Identity and self-esteem
* Friendships and relationships
* Coping skills and emotional regulation

### Features

* Teen-friendly language
* Interactive coping tools
* Clear guidance on how to ask for help
* Crisis signposting

---

## 🧒 Children & Families Page (`/children`)

### Purpose

To help children understand emotions in a gentle way and support parents and carers in nurturing emotional wellbeing.

### For Children

* Understanding feelings
* Managing worries and fears
* Big emotions explained
* Simple calming exercises

### For Parents & Carers

* Supporting children's mental health
* Talking about difficult topics
* Supporting children with illness or disability

---

## 🌗 Mood Disorders Page (`/mood-disorders`)

### Purpose

To provide clear, compassionate information about mood disorders as part of mental illness, using careful, non-stigmatising language.

### Across All Ages

Mood disorders can affect **children, teenagers, and adults**. Symptoms may present differently depending on age, environment, and support systems.

* **Children:** changes in behaviour, mood, sleep, or play
* **Teens:** intense mood changes, withdrawal, or overwhelm
* **Adults:** persistent low mood, emotional numbness, or mood instability

### Topics Covered

* Depression and persistent low mood
* Bipolar spectrum conditions
* Emotional regulation difficulties
* Impact on daily life, school, work, and relationships

### Gentle Guidance

* Information-focused, not diagnostic
* Emphasis on support, coping, and understanding
* Encouragement to seek professional help when needed

### Page Signposting

* Children → *Children & Families*
* Teens → *Teen Support*
* Adults → *Adult Support*

---

## ♿ Chronic & Invisible Illness Page (`/chronic-illness`)

### Purpose

To acknowledge and support the emotional impact of living with long-term, chronic, or invisible conditions.

### Across All Ages

Chronic and invisible illnesses can affect **children, teenagers, and adults**. Emotional wellbeing may change over time, and young people may struggle to explain pain, fatigue, or distress in ways adults expect.

* **Children:** behavioural changes, worries, withdrawal
* **Teens:** identity struggles, social isolation
* **Adults:** grief, burnout, loss of independence

### Topics Covered

* Mental health and chronic pain
* Fatigue and emotional exhaustion
* Medical trauma
* Feeling misunderstood or not believed
* Loss of independence and identity

### Core Message

Physical and mental health are deeply connected. Struggling emotionally due to illness is valid and understandable.

---

## 🇬🇧 UK Resources Page (`/resources`)

### Emergency & Crisis Support

* **999** – Immediate danger
* **NHS 111** – Urgent mental health help

### Adults

* Samaritans – 116 123
* Mind – 0300 123 3393
* Shout – Text SHOUT to 85258

### Teens & Young People

* Childline – 0800 1111
* YoungMinds
* The Mix
* Kooth

### Families & Disability

* NSPCC
* Family Lives
* Scope
* Fibromyalgia Action UK

---

## ♿ Accessibility Features

* High-contrast colour options
* Dyslexia-friendly fonts
* Plain language summaries
* Screen-reader compatibility
* Keyboard navigation support
* Content warnings where appropriate
* Child-safe content filters

---

## 📄 Disclaimer

This website provides educational and supportive information only and is not a substitute for professional mental health care.
