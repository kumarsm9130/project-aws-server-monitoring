# ☁️ AWS EC2 Server Monitoring — Project

Project that walks through a real AWS workflow: launching an **EC2** instance, monitoring it with **CloudWatch**, configuring **Alarms + SNS** notifications, and locking down access with **IAM** groups/users. Using console steps and includes real screenshots from the setup.

## 📌 Overview

This project demonstrates the end-to-end lifecycle of monitoring an EC2 server on AWS:

1. **Launch** an EC2 instance
2. **Monitor** it using CloudWatch metrics (CPU, Network, Status Checks)
3. **Alert** on thresholds via CloudWatch Alarms + SNS email notifications
4. **Secure** access using least-privilege IAM groups and users

 A Chart.js-powered CPU utilization graph, and screenshots captured directly from the AWS Console during the build.

---

## 🖥️ Pages

| Page | Description |
|---|---|
| `index.html` | Landing page — project overview and how to navigate the demo |
| `ec2.html` | EC2 instance creation steps (AMI, instance type, VPC/Subnet/Security Group, Key Pair) |
| `monitoring.html` | CloudWatch metrics explained + live Chart.js CPU utilization chart |
| `alarms.html` | CloudWatch Alarms configuration and SNS email notification setup |
| `iam.html` | IAM group/user creation for least-privilege, read-only monitoring access |

---

## 🚀 What This Demo Covers

### 1. EC2 Instance Setup
- Choosing an AMI (Amazon Linux 2023)
- Selecting instance type (`t3.micro` / `t2.micro`)
- Configuring VPC, Subnet, and Security Group rules
- Creating a Key Pair for SSH access
- Verifying instance status checks

![EC2 Instance Overview](images/picture1.png)
![EC2 Monitoring Tab](images/picture2.png)

### 2. CloudWatch Monitoring
- Key metrics tracked: `CPUUtilization`, `NetworkIn/Out`, `StatusCheckFailed`
- Dashboard widgets for CPU, Network, Status Checks, and CPU Credit Balance
- Best practices: matching metric period/resolution, `TreatMissingData=notBreaching`, tagging for dashboard filters

![CloudWatch Monitoring Dashboard](images/cloud-watch-monitoring.png)
![CPU / Network / Status Check Details](images/cloudwatch-cpu-network-status.png)

### 3. Alarms & SNS Notifications
- `CPUUtilizationHigh`: triggers when average CPU > 80% for 5 minutes
- `StatusCheckFailedAny`: triggers when max > 0 for 10 minutes
- SNS topic (e.g. `EC2MonitoringTopic`) with email subscription + confirmation

![Alarm Example](images/picture4.png)

### 4. IAM Groups & Users
- Created a `MonitoringViewers` group with the `CloudWatchReadOnlyAccess` policy
- Added a user to the group with console access (no admin permissions)
- Enforced least-privilege access with MFA recommended

![IAM User Groups](images/iam1.png)
![IAM Attach Permissions Policy](images/iam2.png)
![IAM Console Sign-in Details](images/iam3.png)

---

## 🛠️ Tech Stack

- **HTML5** — semantic page structure
- **CSS3** (Flexbox & Grid) — responsive, AWS-console-inspired light theme
- **JavaScript** — DOM utilities + Chart.js integration
- **Chart.js** (CDN) — CPU utilization line chart with mock data

---

## 📁 Folder Structure

```
project/
│── index.html
│── ec2.html
│── monitoring.html
│── alarms.html
│── iam.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── main.js
│   └── charts.js
│
└── images/
        ├── cloud_watch_monitoring.png
        ├── CloudWatch_Monitoring___CPU__Network___Status_Checks.png
        ├── picture1.png
        ├── picture2.png
        ├── picture4.png
        ├── iam1.png
        ├── iam2.png
        └── iam3.png
```

---

## ▶️ Running Locally

No build step required — it's a static site.

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

Then simply open `index.html` in your browser, or serve it locally:

```bash
python3 -m http.server 8080
```

Visit `http://localhost:8080` in your browser.

---

## ✨ Features

- Responsive, AWS-console-styled UI (Flexbox & Grid, mobile breakpoints)
- Fixed top navigation across all pages
- Live CPU utilization chart via Chart.js
- Real AWS Console screenshots for EC2, CloudWatch, Alarms/SNS, and IAM steps
- Clean, professional light theme suitable for a portfolio

---

## 🎯 Purpose

Created to demonstrate practical AWS infrastructure fundamentals — EC2, CloudWatch, Alarms/SNS, and IAM — alongside front-end development skills, as part of a DevOps / Cloud Engineering portfolio.

---

## 👤 Author

**Kumar S Marathe**
DevOps Engineer / Cloud Infrastructure — AWS · Docker · Kubernetes · Jenkins · CI/CD

