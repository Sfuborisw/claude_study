# Claude Code Study Notes

A personal reference guide for Claude Code CLI commands and features.

---

## 1. Three Operating Modes

Claude Code has three different modes:

| Mode | Description |
|------|-------------|
| **Normal Mode** | Default mode. Claude asks for permission before making changes. |
| **Accept Edit On** | Auto-accepts file edits without confirmation prompts. |
| **Plan Mode** | Claude analyzes and plans before implementation. Good for complex tasks. |

---

## 2. Undo / Rewind

Two ways to undo or go back:

- `/rewind` - Rewind to a previous point in the conversation
- `ESC ESC` (Double Escape) - Quick undo shortcut

---

## 3. Skip Permission Mode

To start Claude Code without permission prompts:

```bash
claude --dangerously-skip-permissions
```

> **Warning:** Use with caution. This bypasses all safety confirmations.

---

## 4. Bash Command Execution

- Claude will **always ask for permission** before executing bash commands
- You must approve each command before it runs
- This is a safety feature to prevent unintended system changes

---

## 5. View Running Tasks

Use the `/tasks` command to view currently running background processes:

```
/tasks
```

This shows all active tasks spawned by Claude during the session.

---

## 6. MCP Server Integration (Figma)

Claude Code can connect to MCP (Model Context Protocol) servers for extended functionality.

**Figma MCP Server Setup:**
- Documentation: https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#claude-code

This allows Claude to interact with Figma designs directly.

---

## Quick Reference

| Command | Action |
|---------|--------|
| `claude` | Start Claude Code |
| `claude --dangerously-skip-permissions` | Start without permission prompts |
| `/rewind` | Undo to previous state |
| `/tasks` | View running tasks |
| `/clear` | Clear conversation |
| `/exit` or `Ctrl+C` | Exit Claude Code |
| `ESC ESC` | Quick undo |

---

*Last updated: 2025-01-30*
