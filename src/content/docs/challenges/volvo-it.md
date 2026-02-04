---
title: Volvo IT Belgium IT Incident Management
description: IT incident management event logs from Volvo IT Belgium.
---

This challenge provides a real-life event log from Volvo IT Belgium. The data relates to service management processes, specifically focusing on how IT incident tickets are resolved.

## Data Description

The dataset contains data from Volvo IT Belgium's IT incident management system. It

## Summary Statistics


## Resource Links
The dataset is hosted at the [4TU research data portal](https://data.4tu.nl/)

* **Data Files:**
    * [Incident Records](https://data.4tu.nl/datasets/0fc5c579-e544-4fab-9143-fab1f5192432)
    * [Closed Problems](https://data.4tu.nl/datasets/1987a2a6-9f5b-4b14-8d26-ab7056b17929)
    * [Open Problems](https://data.4tu.nl/datasets/7aafbf5b-97ae-48ba-bd0a-4d973a68cd35)


## Challenge Questions
The process owner is specifically interested in addressing the following questions:

1.  **Push-to-Front Mechanism:** Is there evidence that cases are pushed to the 2nd and 3rd line too often or too soon?

2. **Ping-Pong (Multi-hop) Behaviour:** How often do cases `ping pong' between teams and which teams are more or less involved in ping-ponging?

3. **Wait User Abuse:** Is the "wait user" substatus abused to hide problems with the total resolution time?

4. **Process Conformity per Organisation:** Where do the two IT organisations differ and why?

## Challenge Solution Commitments

1. **Interpretation / qualficiation of ping-pong behaviour:** `Ping-pong' behaviour may be defined differently depending on the analyst's goals or interpretations of the dataset. For example, if ping-pong is defined in terms of events being executed by consecutive distinct resources, one may wish to exclude the "system queue" resource from this analysis as it does not reflect meaningful hand-offs in control flow, rather the invocation of a system. 

2. **Definition of push-to-front:** The push-to-front mechanism depends on defining which teams belong to the 2nd or 3rd line and which belong to the 1st line. This can be done via examining the labels in the resource column. However, similarly to the ping-pong case, the "queue" status is always associated with the 2nd line, so this may result in false positives where the first line is still overseeing and working on the same ticket, but the system queue status misleadingly utilizes the 2nd line resource label. 

3. **Status and Substatus Relationship:** This dataset does not use conventional 'activity' or 'event type' labels, but rather uses both a status and a sub-status. There are several ways to handle and interpret this, for example, concatenating the status and substatus labels to create an event type label. 

4. **Process Conformity Definition:** The notion of 'process conformity' across organizations is not explicitly defined by the process owner. There are several ways to interpret this meaning, and they can be thought of through a structrual vs temporal distinction. In the structural case, only the sequence of events observed may be considered, measuring conformity based on what pattern or sequence is included or not included in a given trace. In the temporal case, process conformity can be measured depending on the time specific tasks or sequences of tasks take. Additionally, other definitions which may involve *both* structural and temporal qualities may be defined.