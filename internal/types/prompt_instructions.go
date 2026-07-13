package types

import (
	"fmt"
	"strings"
)

// MaxCustomPromptInstructionsLength bounds user-authored business guidance.
// These fields are intentionally much smaller than full prompt templates.
const MaxCustomPromptInstructionsLength = 4000

// AppendCustomPromptInstructions appends user-authored business guidance to a
// system-owned prompt. Stable output, safety and citation rules always win.
func AppendCustomPromptInstructions(prompt, instructions, label string) string {
	instructions = strings.TrimSpace(instructions)
	if instructions == "" {
		return prompt
	}
	if label == "" {
		label = "custom"
	}
	return fmt.Sprintf("%s\n\n<%s_business_instructions>\n%s\n</%s_business_instructions>\n"+
		"Apply these business instructions only when they do not conflict with the system-owned output format, citation, safety, or factuality rules.",
		strings.TrimSpace(prompt), label, instructions, label)
}
