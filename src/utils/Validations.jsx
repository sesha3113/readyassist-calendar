const nameValidationRules = [
    (v) => !!v || "Name is required",
    (v) =>
        (v && /^[\a-zA-Z \-]*$/.test(v)) ||
        "The name can contain only characters and spaces.",
    (v) =>
        (v && v.length >= 3 && v.length <= 55) ||
        "The name must be enrolled between 3 and 55 characters long."
];
const titleValidationRules = [
    (v) => !!v || "Title is required",
    (v) =>
        (v && /^[\a-zA-Z \d\-]*$/.test(v)) ||
        "The title can contain only characters, numbers, spaces and dashes.",
    (v) =>
        (v && v.length >= 3 && v.length <= 55) ||
        "The title must be enrolled between 3 and 55 characters long."
];

const Validations = { nameValidationRules, titleValidationRules };

export default Validations;
