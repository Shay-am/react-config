# Instalacja create-react-app

jesli chcemy korzystać z npm albo npx to sprawdzamy czy mamy package.lock.json, jak mamy yarn.lock to usuwamy go i wpisujemy komende npm install

#Instalacja Eslinta

##.stworzenie pliku eslintrc

##.przenieśc extands z package.json do .eslintrc

    {
        	"extends": ["react-app"]
    }

##. zainstalowanie paczki airbnb, potrzeba kilka paczek zainstalowac, ale istnieje jedna komenda:

    npx install-peerdeps --dev eslint-config-airbnb

    #i dodac w extands "airbnb"

    {
        	"extends": ["react-app", "airbnb"]
    }

## zmiana w rules aby eslint akceptował rozrzeszenie .js i .jsx

"rules": {
"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
}

---

#instalacja Prettier

##zainstalowanie paczki konfigurującej współdziałanie 'eslinta' i prettier

    npm install -D eslint-config-prettier prettier

    ##w pliku .eslint w "extands" dodajemy "prettier" i usuwamy "react-app"

    "extends": ["airbnb", "prettier"],

    ##dodajemy zmienne globalne które sa undefinde typu "document"

     "globals": {
        "document": true
    },

#Instalowanie husky i lint-stage => służące sprawdzenia poprawności kodu przed zrobieniem commit

    npm install -D husky lint-staged

## w package.json dodać

"husky": {
"hooks": {
"pre-commit": "lint-staged"
}

},
"lint-staged": {
"\*.js": [
"prettier --config .prettierrc --write",
"eslint --fix",
"git add"
]
},
