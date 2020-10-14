/**
 * @file Function triggered from 'hack.suppressError' command to add a suppress error comment before the given line.
 */

import * as vscode from "vscode";

export function unboundNameSuggest(
  document: vscode.TextDocument,
  error: vscode.Diagnostic,
  replacement: string
) {
  const edit = new vscode.WorkspaceEdit();
  edit.replace(
    document.uri,
    error.range,
    "\\"+replacement
  );
  return vscode.workspace.applyEdit(edit);
}
