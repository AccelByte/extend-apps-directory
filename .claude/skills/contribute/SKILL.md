---
name: contribute
description: Implement design from a screenshot or a definition. Use model Claude Sonnet 4.5 for this task.
---

# Contribute

## Overview

Implements a design from a screenshot or a definition in a Extend Apps Directory structure.

## When to Use

Use this skill when:

- You want to contribute to Extend Apps Directory.
- You are not familiar on how to contribute to Extend Apps Directory.

## Implementation Principles

1. Always follow semantic HTML.
2. DO NOT SKEW FROM THE DESIGN. Use exactly the same style _per element_. There may be flaws in the design, but it is what it is.
3. DO NOT CREATE ADDITIONAL FILES that are otherwise not required. Focus on the given task at hand.
4. If the prompt specifies a file (or files) that already exists, do not recreate them.
5. When running a code snippet (command line), use the following as terminal preference:
   1. Windows: Powershell 7.
   2. \*nix: Zsh.
6. Implement responsive design with mobile-first approach using CSS media queries.
7. For texts in the design, COPY THEM WORD FOR WORD. Do not deviate the text content from the design. Ensure that this not only covers a "free text", but also texts inside cards and text inside buttons. Ensure that there are no missing elements.

## Instructions

Make sure to keep the implementation principles above in mind when doing these steps.

### Step 0: Verify requirements

Ensure that you can establish connection to Figma MCP Server according [to the guide](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#claude-code). If there is no MCP server named "figma", terminate the action.

### Step 1: Implement the features

Use the resources obtained from Figma MCP server to implement each of the sections. Ensure high quality of the implementation and it's pixel-perfect to what's provided in the design.