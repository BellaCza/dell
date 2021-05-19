Question: How to apply a click event to all paragraphs except for the last?

Answer: $('p:not(:last)').on('click', someFunction);
