---
layout: default
title: "Supplementary Materials for Rebuttal"
---

[← Back to main page](index.md)

This document provides supplementary tables and examples referenced in the rebuttal.

Table OM-1 and OM-2 support Reviewer A’s questions on oracle-type breakdown.

Table OM-3 supports Reviewer A’s question on whole-test generation vs. oracle regeneration.

---

### Table OM-1
Oracle-Type Breakdown on Defects4J. 

The following table breaks down RQ1-1 results by oracle type on Defects4J, in response to Reviewer A’s question on whether DeepOracle’s gains are dominated by one oracle category.

| Method     | Assertions | Expected Exceptions | Unexpected Exceptions |  Total  |
| :--------: | :--------: | :-----------------: | :-------------------: | :-----: |
| TOGA       |  15 (22)   |       8 (11)        |        25 (35)        | 46 (68) |
| TOGLL      |  18 (36)   |        0 (0)        |         0 (0)         | 18 (36) |
| LLM-Direct |  17 (33)   |        6 (6)        |        20 (26)        | 42 (65) |
| DeepOracle |  20 (29)   |       11 (15)       |        24 (32)        | 53 (76) |

**Note.** The number outside parentheses denotes the number of bugs found; the number inside parentheses denotes the number of TP test cases.

**Takeaway.** DeepOracle’s gains are distributed across multiple oracle categories rather than dominated by one single oracle form.

---

### Table OM-2
Oracle-Type Breakdown on GrowingBugs

The following table provides the same oracle-type breakdown on GrowingBugs.

| Method     | Assertions | Expected Exceptions | Unexpected Exceptions | Total  |
| :--------: | :--------: | :-----------------: | :-------------------: | :----: |
| TOGA       |   0 (0)    |        1 (2)        |         4 (4)         | 5 (6)  |
| TOGLL      |   1 (15)   |        0 (0)        |         0 (0)         | 1 (15) |
| LLM-Direct |   1 (5)    |        1 (2)        |         2 (2)         | 4 (12) |
| DeepOracle |   2 (7)    |        2 (4)        |         4 (4)         | 8 (15) |

**Note.** The number outside parentheses denotes the number of bugs found; the number inside parentheses denotes the number of TP test cases.

**Takeaway.** The advantage of DeepOracle is not limited to a single oracle type even on unseen bugs.

---

### Table OM-3
Whole-Test Generation vs. Oracle Regeneration

To answer Reviewer A’s question, we compare:

(a) directly generating whole tests (prefix + oracle) with an LLM, and

(b) keeping the same LLM-generated prefixes but regenerating only the oracle with DeepOracle.

Defects4J
| Method                 | TP   | FP   | FPR    | Precision | BugFound |
| ---------------------- | ---- | ---- | ------ | --------- | -------- |
| (a) LLM Gen Whole Test | 85   | 392  | 16.48% | 17.82%    | 54       |
| (b) LLM + DeepOracle   | 99   | 390  | 16.35% | 20.25%    | 61       |

GrowingBugs
| Method                 | TP   | FP   | FPR    | Precision | BugFound |
| ---------------------- | ---- | ---- | ------ | --------- | -------- |
| (a) LLM Gen Whole Test | 1    | 34   | 18.09% | 2.86%     | 1        |
| (b) LLM + DeepOracle   | 4    | 36   | 19.35% | 10.00%    | 2        |

Takeaway. Since (a) and (b) use the same prefixes, the gain of DeepOracle comes from improved oracle synthesis rather than stronger prefixes.

---

[← Back to main page](index.md)
