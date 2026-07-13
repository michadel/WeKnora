package types

import (
	"strings"
	"testing"
)

func TestAppendCustomPromptInstructions(t *testing.T) {
	t.Run("empty preserves prompt", func(t *testing.T) {
		if got := AppendCustomPromptInstructions("base", "  ", "wiki"); got != "base" {
			t.Fatalf("got %q", got)
		}
	})

	t.Run("appends bounded business guidance after base", func(t *testing.T) {
		got := AppendCustomPromptInstructions("base", " Focus on contracts. ", "wiki")
		if !strings.HasPrefix(got, "base\n\n<wiki_business_instructions>") {
			t.Fatalf("unexpected prefix: %q", got)
		}
		if !strings.Contains(got, "Focus on contracts.") || !strings.Contains(got, "do not conflict") {
			t.Fatalf("missing guidance or precedence rule: %q", got)
		}
	})
}
