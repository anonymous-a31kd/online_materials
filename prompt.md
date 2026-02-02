---
layout: default
title: Prompts Used in Experiments
---

# Prompts Used in Experiments

This page lists the prompts used in our experiments under anonymous review.

---

## Contents

- [Prompt 1: Scenario Inference Prompt](#prompt-1-scenario-inference-prompt)
- [Prompt 2: Assertion Generation Prompt](#prompt-2-assertion-generation-prompt)
- [Prompt 3: Exception Inference Prompt](#prompt-3-exception-inference-prompt)
- [Prompt 4: Vote Oracle Prompt](#prompt-4-vote-oracle-prompt)

---


## Prompt 1: Scenario Inference Prompt
```` markdown
# Role
You are an expert in software testing. 
# Task
There is now a test scenario inference task.
Please infer the test scenario or exception handling scenario based on the javadoc comment, the focal method, 
and the context of the focal test class for the test prefix.

# Requirement:
The test scenario mainly includes the following three aspects at a conceptual level:
1. What behavior the test is exercising.
2. Which objects are involved and what their roles are.
3. What the high-level goal or purpose of this test is.
Focus on what the code **SHOULD DO** (based on Javadoc or standard coding conventions) not what the potentially buggy code ACTUALLY DOES.

# Contextual Information
Test prefix:
{TEST_PREFIX}

Focal_method and javadoc comments:
{JAVADOC}
{FOCAL_METHOD}

Under Test class context:
{CLASS_CONTEXT}

# Output Format
The answer should include the test scenario and category in plaintext block, such as: 
```plaintext
Test scenario:
Category: 
```
````
[↑ Back to Contents](#contents)
---

## Prompt 2: Assertion Generation Prompt
```` markdown
# Role
You are now an Oracle generation expert.
# Task
Please generate the Oracle for this Test Prefix and Focal method, based on the test scenario, javadoc comments(if have), context of the under test class.
The generated Oracle mainly falls into one of two categories: assert statements or exception(@Test(expected=Expection.class)).
Attention : If you need to generate an assert statement, it's best to generate only one assert statement for the test prefix, if needed, multiple assert statements can also be generated.

# Requirements
Keep the structure of the test prefix unchanged and follow the format of JUnit4. JDK version 8. 

# Output
Return the test case with the test prefix completed, enclosed in a Java block, such as:
```java
@Test
public void test_xx_x() throws Exception {{
// Complete test case
}}
```

# Contextual Information
Test Scenario:
{test_scenario}

Test Prefix:
{test_prefix}

Focal method and javadoc comments:
{javadoc}
{method_signature}

Context of the under test class:
{context}
````
[↑ Back to Contents](#contents)
---

## Prompt 3: Exception Inference Prompt
```` markdown
# Role
You are a Java Code Reliability Auditor.
# Task
Please use the given information: focal method, javadoc comments(if have), test prefix, test scenario.
Your task is to determine whether the test prefix will trigger an Unexpected exceptions during actual execution. 

# Definition: What is an "Unexpected Exception"?
Unexpected exception: An unexpected exception was thrown due to errors, crashes, or logical issues in the Focal Method.

# Judgment Logic (Binary Classification)

###  Return Yes (Unexpected Exception) in any of the following situations:
Trigger: An exception ACTUALLY occurs during execution and it is wrong.
1.  Runtime Crashes:
    The code execution terminates with an unchecked exception.
    Reasoning: The code blindly operated on invalid data without checking it first.
2.  Logic Violation (The "Wrong" Reject):
    * The current input is valid,  but the code **actively throws** an exception.
    * *Reasoning:* The implementation overly restricts valid inputs, preventing the expected functionality.

### Return No: 
If it does not fall into the above cases, please return NO.

# Output Format
Return results in the following format:
Therefore, this test will throw an Unexpected exception: Yes | No

# Contextual Information
Test Scenario:
{test_scenario}

Test Prefix:
{test_prefix}

Focal method and javadoc comments:
{javadoc}
{focal_method}
````
[↑ Back to Contents](#contents)
---

## Prompt 4: Vote oracle Prompt
```` markdown
Now there is a judgment task.
# Task
Now there are two versions of complete test cases generated with the same test prefix. Please determine if the Oracles of these two test cases are semantically equivalent. 

# Requirements
If the Oracles are equivalent, please return Yes.
If the Oracles are not equivalent, please return No.

# Output Format
Return results in the following format:
Therefore, it should be: < Yes | No >

# Contextual Information
Test Prefix:
{test_prefix}

Two versions of complete test cases:
TestCase_1:
{test_case_1}

TestCase_2:
{test_case_2}
````
[↑ Back to Contents](#contents)
---
