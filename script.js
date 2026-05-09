const zones = [
  {
    id: "foundation",
    title: "Cloud foundation",
    hint: "Accounts, network, landing-zone guardrails, and connectivity.",
  },
  {
    id: "security",
    title: "Security and secrets",
    hint: "Identity, key management, private access, and sensitive data controls.",
  },
  {
    id: "batch",
    title: "Batch ingestion",
    hint: "Move databases, files, SaaS extracts, and scheduled data loads.",
  },
  {
    id: "streaming",
    title: "Streaming and events",
    hint: "Event routing, real-time streams, and managed Kafka patterns.",
  },
  {
    id: "storage",
    title: "Data lake storage",
    hint: "Durable object storage, lake formats, archive, and lakehouse tables.",
  },
  {
    id: "processing",
    title: "Processing and transformation",
    hint: "ETL, Spark, orchestration, serverless transforms, and compute.",
  },
  {
    id: "governance",
    title: "Governance and catalogue",
    hint: "Catalogue, data permissions, discovery, lineage, and data products.",
  },
  {
    id: "serving",
    title: "Serving and consumption",
    hint: "Query, BI, search, APIs, and analytics consumption layers.",
  },
  {
    id: "ml",
    title: "Machine Learning and AI",
    hint: "Model building, generative AI, feature reuse, and AI services.",
  },
  {
    id: "monitoring",
    title: "Monitoring and operations",
    hint: "Audit, observability, configuration, dashboards, and run operations.",
  },
];

const services = [
  {
    id: "control-tower",
    name: "AWS Control Tower",
    zone: "foundation",
    description: "Sets up and governs a multi-account AWS landing zone with guardrails and account baselines.",
  },
  {
    id: "organizations",
    name: "AWS Organizations",
    zone: "foundation",
    description: "Centrally manages AWS accounts, organizational units, policies, and consolidated billing.",
  },
  {
    id: "vpc",
    name: "Amazon VPC",
    zone: "foundation",
    description: "Provides isolated AWS networking with subnets, route tables, gateways, and security boundaries.",
  },
  {
    id: "transit-gateway",
    name: "AWS Transit Gateway",
    zone: "foundation",
    description: "Connects VPCs and on-premises networks through a central cloud network hub.",
  },
  {
    id: "iam-identity-center",
    name: "IAM Identity Center",
    zone: "security",
    description: "Provides workforce single sign-on and centralized access assignments for AWS accounts and apps.",
  },
  {
    id: "secrets-manager",
    name: "AWS Secrets Manager",
    zone: "security",
    description: "Stores, retrieves, rotates, and audits secrets such as database credentials and API keys.",
  },
  {
    id: "kms",
    name: "AWS KMS",
    zone: "security",
    description: "Creates and controls encryption keys used to protect data across AWS services.",
  },
  {
    id: "privatelink",
    name: "AWS PrivateLink",
    zone: "security",
    description: "Privately connects VPCs to AWS services or partner services without exposing traffic to the internet.",
  },
  {
    id: "macie",
    name: "Amazon Macie",
    zone: "security",
    description: "Discovers and helps protect sensitive data such as PII in Amazon S3 using automated analysis.",
  },
  {
    id: "dms",
    name: "AWS DMS",
    zone: "batch",
    description: "Migrates and replicates databases to AWS with full-load and change data capture patterns.",
  },
  {
    id: "datasync",
    name: "AWS DataSync",
    zone: "batch",
    description: "Automates high-speed file and object transfers between on-premises storage and AWS.",
  },
  {
    id: "transfer-family",
    name: "AWS Transfer Family",
    zone: "batch",
    description: "Provides managed SFTP, FTPS, FTP, and AS2 endpoints backed by AWS storage.",
  },
  {
    id: "appflow",
    name: "Amazon AppFlow",
    zone: "batch",
    description: "Moves data between SaaS applications and AWS services with managed connectors and flows.",
  },
  {
    id: "kinesis-streams",
    name: "Kinesis Data Streams",
    zone: "streaming",
    description: "Captures and stores high-throughput real-time event streams for custom consumers.",
  },
  {
    id: "firehose",
    name: "Amazon Data Firehose",
    zone: "streaming",
    description: "Loads streaming data into destinations such as S3, Redshift, OpenSearch, and analytics tools.",
  },
  {
    id: "eventbridge",
    name: "Amazon EventBridge",
    zone: "streaming",
    description: "Routes events from AWS services, SaaS apps, and custom producers to event-driven targets.",
  },
  {
    id: "msk",
    name: "Amazon MSK",
    zone: "streaming",
    description: "Runs managed Apache Kafka clusters for event streaming workloads on AWS.",
  },
  {
    id: "s3",
    name: "Amazon S3",
    zone: "storage",
    description: "Durable object storage for raw, curated, and analytics-ready data lake assets.",
  },
  {
    id: "glacier",
    name: "S3 Glacier",
    zone: "storage",
    description: "Low-cost archive storage classes for long-term retention and infrequently accessed data.",
  },
  {
    id: "iceberg",
    name: "Apache Iceberg on AWS",
    zone: "storage",
    description: "Open table format for large analytic tables with schema evolution, snapshots, and engine interoperability.",
  },
  {
    id: "glue-etl",
    name: "AWS Glue ETL",
    zone: "processing",
    description: "Serverless data integration service for Spark ETL, data preparation, and workflow jobs.",
  },
  {
    id: "emr",
    name: "Amazon EMR",
    zone: "processing",
    description: "Managed big data platform for Spark, Hive, Presto, Flink, and other open-source engines.",
  },
  {
    id: "step-functions",
    name: "AWS Step Functions",
    zone: "processing",
    description: "Orchestrates multi-step workflows, retries, branching logic, and service integrations.",
  },
  {
    id: "lambda",
    name: "AWS Lambda",
    zone: "processing",
    description: "Runs event-driven functions without managing servers for lightweight transforms and automation.",
  },
  {
    id: "lake-formation",
    name: "AWS Lake Formation",
    zone: "governance",
    description: "Centralizes data lake permissions and secure table-level access across analytics services.",
  },
  {
    id: "glue-catalog",
    name: "AWS Glue Data Catalog",
    zone: "governance",
    description: "Stores table metadata, schemas, partitions, and catalog definitions for analytics engines.",
  },
  {
    id: "datazone",
    name: "Amazon DataZone",
    zone: "governance",
    description: "Catalogs, governs, publishes, and subscribes to data products across organizational domains.",
  },
  {
    id: "athena",
    name: "Amazon Athena",
    zone: "serving",
    description: "Runs serverless SQL queries directly on data in S3 and cataloged lake tables.",
  },
  {
    id: "redshift",
    name: "Amazon Redshift",
    zone: "serving",
    description: "Cloud data warehouse for high-performance SQL analytics, marts, and BI workloads.",
  },
  {
    id: "quicksight",
    name: "Amazon QuickSight",
    zone: "serving",
    description: "Business intelligence service for dashboards, visual analytics, and embedded reporting.",
  },
  {
    id: "opensearch",
    name: "Amazon OpenSearch Service",
    zone: "serving",
    description: "Managed search, log analytics, and vector search service for interactive data exploration.",
  },
  {
    id: "sagemaker",
    name: "Amazon SageMaker",
    zone: "ml",
    description: "Builds, trains, deploys, and manages machine learning models across the ML lifecycle.",
  },
  {
    id: "bedrock",
    name: "Amazon Bedrock",
    zone: "ml",
    description: "Provides managed access to foundation models for generative AI apps and agents.",
  },
  {
    id: "sagemaker-feature-store",
    name: "SageMaker Feature Store",
    zone: "ml",
    description: "Stores, shares, and serves curated ML features for training and low-latency inference.",
  },
  {
    id: "cloudwatch",
    name: "Amazon CloudWatch",
    zone: "monitoring",
    description: "Collects metrics, logs, alarms, and dashboards for AWS resources and applications.",
  },
  {
    id: "cloudtrail",
    name: "AWS CloudTrail",
    zone: "monitoring",
    description: "Records AWS API activity for audit, security investigation, and compliance evidence.",
  },
  {
    id: "config",
    name: "AWS Config",
    zone: "monitoring",
    description: "Tracks resource configuration history and evaluates compliance against defined rules.",
  },
  {
    id: "grafana",
    name: "Amazon Managed Grafana",
    zone: "monitoring",
    description: "Managed Grafana workspaces for visualizing metrics, logs, traces, and operational dashboards.",
  },
];

const zonesGrid = document.querySelector("#zonesGrid");
const palette = document.querySelector("#palette");
const statusMessage = document.querySelector("#statusMessage");
const scoreValue = document.querySelector("#scoreValue");
const scoreLabel = document.querySelector("#scoreLabel");
const checkBtn = document.querySelector("#checkBtn");
const revealBtn = document.querySelector("#revealBtn");
const resetBtn = document.querySelector("#resetBtn");
const exportBtn = document.querySelector("#exportBtn");
const helpBtn = document.querySelector("#helpBtn");
const helpDialog = document.querySelector("#helpDialog");
const closeHelpBtn = document.querySelector("#closeHelpBtn");

let selectedCardId = null;
let helpReturnFocus = null;
const serviceTooltip = document.createElement("div");
serviceTooltip.id = "serviceTooltip";
serviceTooltip.className = "service-tooltip";
serviceTooltip.setAttribute("role", "tooltip");
document.body.append(serviceTooltip);

function getService(id) {
  return services.find((service) => service.id === id);
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function createZone(zone) {
  const article = document.createElement("article");
  article.className = "dropzone";
  article.dataset.zone = zone.id;

  article.innerHTML = `
    <div class="dropzone__header">
      <div>
        <h3>${zone.title}</h3>
        <p>${zone.hint}</p>
      </div>
      <span class="dropzone__count" aria-label="Cards in ${zone.title}">0</span>
    </div>
    <div class="dropzone__cards drop-target" data-zone="${zone.id}" tabindex="0" aria-label="Drop cards into ${zone.title}">
      <span class="empty-note">Drop AWS services here</span>
    </div>
  `;

  return article;
}

function createCard(service) {
  const card = document.createElement("button");
  const iconPath = `assets/aws-icons/services/${service.id}.svg`;
  card.type = "button";
  card.id = service.id;
  card.className = "service-card";
  card.draggable = true;
  card.dataset.serviceId = service.id;
  card.dataset.correctZone = service.zone;
  card.dataset.description = service.description;
  card.setAttribute("aria-grabbed", "false");
  card.setAttribute("aria-label", `${service.name}. ${service.description}`);
  card.innerHTML = `
    <span class="service-card__mark" aria-hidden="true">
      <img src="${iconPath}" alt="" loading="lazy" />
    </span>
    <span class="service-card__text">${service.name}</span>
  `;

  card.addEventListener("dragstart", handleDragStart);
  card.addEventListener("dragend", handleDragEnd);
  card.addEventListener("pointerenter", (event) => showServiceTooltip(event, service));
  card.addEventListener("pointermove", positionServiceTooltip);
  card.addEventListener("pointerleave", hideServiceTooltip);
  card.addEventListener("focus", (event) => showServiceTooltip(event, service, true));
  card.addEventListener("blur", hideServiceTooltip);
  card.addEventListener("click", (event) => {
    event.stopPropagation();
    selectCard(service.id);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      clearSelection();
    }
  });

  return card;
}

function renderZones() {
  zonesGrid.innerHTML = "";
  zones.forEach((zone) => zonesGrid.append(createZone(zone)));
}

function renderCards() {
  palette.innerHTML = "";
  shuffle(services).forEach((service) => palette.append(createCard(service)));
}

function handleDragStart(event) {
  const card = event.currentTarget;
  hideServiceTooltip();
  card.classList.add("is-dragging");
  card.setAttribute("aria-grabbed", "true");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", card.dataset.serviceId);
}

function showServiceTooltip(event, service, anchorToCard = false) {
  serviceTooltip.innerHTML = `
    <strong>${service.name}</strong>
    <span>${service.description}</span>
  `;
  serviceTooltip.classList.add("is-visible");
  event.currentTarget.setAttribute("aria-describedby", "serviceTooltip");

  if (anchorToCard) {
    const rect = event.currentTarget.getBoundingClientRect();
    positionTooltip(rect.left + rect.width / 2, rect.top - 8);
    return;
  }

  positionServiceTooltip(event);
}

function hideServiceTooltip() {
  serviceTooltip.classList.remove("is-visible");
  document.querySelectorAll("[aria-describedby='serviceTooltip']").forEach((card) => {
    card.removeAttribute("aria-describedby");
  });
}

function positionServiceTooltip(event) {
  positionTooltip(event.clientX, event.clientY);
}

function positionTooltip(x, y) {
  if (!serviceTooltip.classList.contains("is-visible")) {
    return;
  }

  const margin = 14;
  const offset = 16;
  const tooltipRect = serviceTooltip.getBoundingClientRect();
  let left = x + offset;
  let top = y + offset;

  if (left + tooltipRect.width + margin > window.innerWidth) {
    left = x - tooltipRect.width - offset;
  }

  if (top + tooltipRect.height + margin > window.innerHeight) {
    top = y - tooltipRect.height - offset;
  }

  serviceTooltip.style.left = `${Math.max(margin, left)}px`;
  serviceTooltip.style.top = `${Math.max(margin, top)}px`;
}

function handleDragEnd(event) {
  event.currentTarget.classList.remove("is-dragging");
  event.currentTarget.setAttribute("aria-grabbed", "false");
  document.querySelectorAll(".drop-target").forEach((target) => {
    target.classList.remove("is-over");
  });
}

function handleDropTargetEvents(target) {
  target.addEventListener("dragover", (event) => {
    event.preventDefault();
    target.classList.add("is-over");
    event.dataTransfer.dropEffect = "move";
  });

  target.addEventListener("dragleave", () => {
    target.classList.remove("is-over");
  });

  target.addEventListener("drop", (event) => {
    event.preventDefault();
    target.classList.remove("is-over");
    const serviceId = event.dataTransfer.getData("text/plain");
    moveCard(serviceId, target.dataset.zone);
    announceMove(serviceId, target.dataset.zone);
  });

  target.addEventListener("click", () => {
    if (selectedCardId) {
      moveCard(selectedCardId, target.dataset.zone);
      announceMove(selectedCardId, target.dataset.zone);
      clearSelection();
    }
  });
}

function wireDropTargets() {
  document.querySelectorAll(".drop-target").forEach(handleDropTargetEvents);
  document.querySelectorAll(".dropzone").forEach((zoneElement) => {
    zoneElement.addEventListener("click", (event) => {
      if (!selectedCardId || event.target.closest(".service-card")) {
        return;
      }

      moveCard(selectedCardId, zoneElement.dataset.zone);
      announceMove(selectedCardId, zoneElement.dataset.zone);
      clearSelection();
    });
  });
}

function selectCard(serviceId) {
  if (selectedCardId === serviceId) {
    clearSelection();
    return;
  }

  clearSelection();
  selectedCardId = serviceId;
  const card = document.querySelector(`[data-service-id="${serviceId}"]`);
  card.classList.add("is-selected");
  card.setAttribute("aria-grabbed", "true");
  setStatus(`Selected ${getService(serviceId).name}. Click any zone to place it.`, "warning");
}

function clearSelection() {
  selectedCardId = null;
  document.querySelectorAll(".service-card.is-selected").forEach((card) => {
    card.classList.remove("is-selected");
    card.setAttribute("aria-grabbed", "false");
  });
}

function moveCard(serviceId, zoneId) {
  const card = document.querySelector(`[data-service-id="${serviceId}"]`);
  const destination =
    zoneId === "palette"
      ? palette
      : document.querySelector(`.dropzone__cards[data-zone="${zoneId}"]`);

  if (!card || !destination) {
    return;
  }

  card.classList.remove("is-correct", "is-incorrect");
  destination.append(card);
  updateEmptyNotes();
  updateCounts();
  updateScore();
}

function announceMove(serviceId, zoneId) {
  const service = getService(serviceId);
  const zone = zones.find((item) => item.id === zoneId);

  if (!service) {
    return;
  }

  if (zoneId === "palette") {
    setStatus(`${service.name} returned to the service palette.`);
    return;
  }

  setStatus(`${service.name} placed in ${zone?.title || "the selected zone"}.`);
}

function updateEmptyNotes() {
  document.querySelectorAll(".dropzone__cards").forEach((target) => {
    const hasCards = target.querySelector(".service-card");
    const emptyNote = target.querySelector(".empty-note");

    if (!hasCards && !emptyNote) {
      const note = document.createElement("span");
      note.className = "empty-note";
      note.textContent = "Drop AWS services here";
      target.append(note);
    }

    if (hasCards && emptyNote) {
      emptyNote.remove();
    }
  });
}

function updateCounts() {
  document.querySelectorAll(".dropzone").forEach((zoneElement) => {
    const count = zoneElement.querySelectorAll(".service-card").length;
    zoneElement.querySelector(".dropzone__count").textContent = count;
  });
}

function updateScore() {
  const placedCards = [...document.querySelectorAll(".dropzone .service-card")];
  const correctCards = placedCards.filter((card) => {
    const actualZone = card.closest(".dropzone").dataset.zone;
    return actualZone === card.dataset.correctZone;
  });

  scoreValue.textContent = `${placedCards.length}/${services.length}`;
  scoreLabel.textContent =
    placedCards.length === services.length
      ? `${correctCards.length} correct`
      : "cards placed";
}

function clearCheckState() {
  document.querySelectorAll(".service-card").forEach((card) => {
    card.classList.remove("is-correct", "is-incorrect");
  });
  document.querySelectorAll(".dropzone").forEach((zoneElement) => {
    zoneElement.classList.remove("is-correct", "is-needs-work");
  });
}

function checkArchitecture() {
  clearSelection();
  clearCheckState();

  const placedCards = [...document.querySelectorAll(".dropzone .service-card")];
  const unplacedCount = services.length - placedCards.length;
  let correctCount = 0;

  placedCards.forEach((card) => {
    const actualZone = card.closest(".dropzone").dataset.zone;
    const isCorrect = actualZone === card.dataset.correctZone;
    card.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    correctCount += isCorrect ? 1 : 0;
  });

  document.querySelectorAll(".dropzone").forEach((zoneElement) => {
    const cards = [...zoneElement.querySelectorAll(".service-card")];
    const hasIncorrect = cards.some((card) => {
      return card.dataset.correctZone !== zoneElement.dataset.zone;
    });
    const hasCorrect = cards.length > 0 && !hasIncorrect;

    if (hasIncorrect) {
      zoneElement.classList.add("is-needs-work");
    }

    if (hasCorrect) {
      zoneElement.classList.add("is-correct");
    }
  });

  updateScore();

  if (correctCount === services.length) {
    setStatus("Excellent. Every AWS service card is in the suggested target zone.", "good");
  } else if (unplacedCount > 0) {
    setStatus(
      `${correctCount} cards are currently in suggested zones. ${unplacedCount} cards are still in the palette.`,
      "warning"
    );
  } else {
    setStatus(
      `${correctCount} of ${services.length} cards match the suggested architecture. Red cards need another look.`,
      "warning"
    );
  }
}

function revealSuggestedAnswer() {
  clearSelection();
  clearCheckState();

  zones.forEach((zone) => {
    const target = document.querySelector(`.dropzone__cards[data-zone="${zone.id}"]`);
    services
      .filter((service) => service.zone === zone.id)
      .sort((first, second) => first.name.localeCompare(second.name))
      .forEach((service) => {
        const card = document.querySelector(`[data-service-id="${service.id}"]`);
        target.append(card);
        card.classList.add("is-correct");
      });
  });

  updateEmptyNotes();
  updateCounts();
  updateScore();
  setStatus("Suggested answer revealed. Use it as a conversation starter, not the only valid architecture.", "good");
}

function resetBoard() {
  clearSelection();
  clearCheckState();
  setStatus("Board reset. Drag AWS cards from the palette into the architecture zones.");
  document.querySelectorAll(".service-card").forEach((card) => card.remove());
  palette.innerHTML = "";
  shuffle(services).forEach((service) => palette.append(createCard(service)));
  updateEmptyNotes();
  updateCounts();
  updateScore();
}

function getBoardAnswer() {
  const answer = {
    app: "Azure to AWS Data Platform Architecture Challenge",
    exportedAt: new Date().toISOString(),
    zones: {},
    unplaced: [],
  };

  zones.forEach((zone) => {
    answer.zones[zone.title] = [...document.querySelectorAll(`.dropzone[data-zone="${zone.id}"] .service-card`)].map(
      (card) => card.querySelector(".service-card__text").textContent
    );
  });

  answer.unplaced = [...palette.querySelectorAll(".service-card")].map((card) => {
    return card.querySelector(".service-card__text").textContent;
  });

  return answer;
}

async function exportTeamAnswer() {
  const answer = getBoardAnswer();
  const exportText = JSON.stringify(answer, null, 2);
  const blob = new Blob([exportText], { type: "application/json" });
  const link = document.createElement("a");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

  link.href = URL.createObjectURL(blob);
  link.download = `azure-to-aws-team-answer-${timestamp}.json`;
  link.click();
  URL.revokeObjectURL(link.href);

  try {
    await navigator.clipboard.writeText(exportText);
    setStatus("Team answer exported as JSON and copied to the clipboard.", "good");
  } catch {
    setStatus("Team answer exported as JSON. Clipboard copy was not available in this browser.", "good");
  }
}

function setStatus(message, tone = "") {
  statusMessage.textContent = message;
  statusMessage.classList.toggle("is-good", tone === "good");
  statusMessage.classList.toggle("is-warning", tone === "warning");
}

function openHelpDialog() {
  helpReturnFocus = document.activeElement;
  helpDialog.hidden = false;
  document.body.style.overflow = "hidden";
  helpDialog.querySelector(".help-dialog__panel").focus();
}

function closeHelpDialog() {
  helpDialog.hidden = true;
  document.body.style.overflow = "";

  if (helpReturnFocus && typeof helpReturnFocus.focus === "function") {
    helpReturnFocus.focus();
  }
}

function handleHelpDialogClick(event) {
  if (event.target.matches("[data-help-close]")) {
    closeHelpDialog();
  }
}

function handleHelpDialogKeydown(event) {
  if (event.key === "Escape" && !helpDialog.hidden) {
    closeHelpDialog();
  }
}

function init() {
  renderZones();
  renderCards();
  wireDropTargets();
  updateEmptyNotes();
  updateCounts();
  updateScore();

  checkBtn.addEventListener("click", checkArchitecture);
  revealBtn.addEventListener("click", revealSuggestedAnswer);
  resetBtn.addEventListener("click", resetBoard);
  exportBtn.addEventListener("click", exportTeamAnswer);
  helpBtn.addEventListener("click", openHelpDialog);
  closeHelpBtn.addEventListener("click", closeHelpDialog);
  helpDialog.addEventListener("click", handleHelpDialogClick);
  document.addEventListener("keydown", handleHelpDialogKeydown);
}

init();
