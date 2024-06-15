export default function countGmailOccurrences(text) {
    // Regular expression to match email addresses with Gmail domain
    // const regex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/g;
    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;


    // Match all occurrences of email addresses with Gmail domain
    const matches = text.match(regex);

    // Count the number of matches
    // const count = matches ? matches.length : 0;

    return matches;
}