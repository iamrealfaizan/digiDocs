export type Address = {
    fullAddress: string;
    city: string;
    state: string;
    zip: string;
};

export type SchoolAdmission = {
    studentInformation: {
        fullName: string;
        dateOfBirth: string; // MM/DD/YYYY
        gender: string; // "Male" | "Female" | "Prefer not to say" | ""
        residentialAddress: Address;
    };
    parentGuardianInformation: {
        fullName: string;
        relationshipToStudent: string;
        contactNumber: string;
        emailAddress: string;
        occupation: string;
        residentialAddressIfDifferent: Address;
    };
    previousSchoolDetails: {
        schoolName: string;
        schoolAddress: Address;
        datesAttended: { from: string; to: string };
        reasonForLeaving: string;
    };
    emergencyContactInformation: {
        fullName: string;
        relationshipToStudent: string;
        contactNumber: string;
        alternateContactNumber: string;
    };
    healthInformation: {
        hasAllergiesOrConditions: boolean;
        conditionsDetails: string;
        physicianNameAndContact: string;
    };
    additionalInformation: {
        specialEducationalNeeds: string;
        interestsHobbies: string;
        languagesSpokenAtHome: string;
    };
    declaration: {
        parentGuardianSignature: string;
        date: string;
    };
    officeUseOnly: {
        receivedBy: string;
        date: string;
        applicationNumber: string;
    };
};

export const emptyAddress: Address = { fullAddress: "", city: "", state: "", zip: "" };

export const defaultAdmission: SchoolAdmission = {
    studentInformation: {
        fullName: "",
        dateOfBirth: "",
        gender: "",
        residentialAddress: { ...emptyAddress },
    },
    parentGuardianInformation: {
        fullName: "",
        relationshipToStudent: "",
        contactNumber: "",
        emailAddress: "",
        occupation: "",
        residentialAddressIfDifferent: { ...emptyAddress },
    },
    previousSchoolDetails: {
        schoolName: "",
        schoolAddress: { ...emptyAddress },
        datesAttended: { from: "", to: "" },
        reasonForLeaving: "",
    },
    emergencyContactInformation: {
        fullName: "",
        relationshipToStudent: "",
        contactNumber: "",
        alternateContactNumber: "",
    },
    healthInformation: {
        hasAllergiesOrConditions: false,
        conditionsDetails: "",
        physicianNameAndContact: "",
    },
    additionalInformation: {
        specialEducationalNeeds: "",
        interestsHobbies: "",
        languagesSpokenAtHome: "",
    },
    declaration: { parentGuardianSignature: "", date: "" },
    officeUseOnly: { receivedBy: "", date: "", applicationNumber: "" },
};
