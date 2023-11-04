function parseMarkdown(input: string) {
	const lines = input.split("\n")
	let result = ""
	let inList = false

	for (let line of lines) {
		// Parse Headings
		if (line.startsWith("# ")) {
			const headingText = line.slice(2)
			result += `<h1 class="md-h1">${headingText}</h1>\n`
		} else if (line.startsWith("## ")) {
			const headingText = line.slice(3)
			result += `<h2 class="md-h2">${headingText}</h2>\n`
		} else if (line.startsWith("### ")) {
			const headingText = line.slice(4)
			result += `<h3  class="md-h3">${headingText}</h3>\n`
		}

		// List
		else if (line.startsWith("- ") || line.startsWith("* ")) {
			if (!inList) {
				result += `<ul class="md-ul">`
				inList = true
			}
			const listItemText = line.slice(2)
			result += `<li class="md-li">${listItemText}</li>`
		} else if (inList && line.trim() === "") {
			result += `</ul>`
			inList = false
		}

		// Blockquote
		else if (line.startsWith("> ")) {
			const blockquoteText = line.slice(2)
			result += `<blockquote class="md-blockquote">${blockquoteText}</blockquote>\n`
		}

		// Paragraph
		else {
			if (inList) {
				result += "</ul>"
				inList = false
			}

			result += `<p class="md-p">${line}</p>\n`
		}
	}

	if (inList) {
		result += "</ul>"
	}

	return result
}

export default parseMarkdown
