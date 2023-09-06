import { designDataType, generateDesignData } from "src/Data/designType";

// Defining design data using the 'generateDesignData' function.
// Each entry represents a pokemon type with its colors.
export const designData: designDataType = {
    "normal": generateDesignData("#785059", "#cb98a7", "normal"),
    "fire": generateDesignData("#af1c24", "#fd4d5a", "fire"),
    "water": generateDesignData("#1552e1", "#85a8fc", "water"),
    "electric": generateDesignData("#e3e32b", "#fafb71", "electric"),
    "grass": generateDesignData("#167a3a", "#27cb50", "grass"),
    "ice": generateDesignData("#87d1f4", "#d6f1fc", "ice"),
    "fighting": generateDesignData("#9a4025", "#ef6139", "fighting"),
    "poison": generateDesignData("#5f2d84", "#9b69da", "poison"),
    "ground": generateDesignData("#aa6f2b", "#6e491f", "ground"),
    "flying": generateDesignData("#4b677d", "#93b1c9", "flying"),
    "psychic": generateDesignData("#a52a6b", "#f71c90", "psychic"),
    "bug": generateDesignData("#1c4b27", "#3c9a50", "bug"),
    "rock": generateDesignData("#48180a", "#8b3e22", "rock"),
    "ghost": generateDesignData("#31336c", "#906791", "ghost"),
    "dragon": generateDesignData("#458b93", "#61cbd9", "dragon"),
    "dark": generateDesignData("#050706", "#5a5979", "dark"),
    "steel": generateDesignData("#60756e", "#43bd94", "steel"),
    "fairy": generateDesignData("#981944", "#eb1269", "fairy"),
}
