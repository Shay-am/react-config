# Instalacja create-react-app

jesli chcemy korzystać z npm albo npx to sprawdzamy czy mamy package.lock.json, jak mamy yarn.lock to usuwamy go i wpisujemy komende npm install

#Instalacja Eslinta
##.stworzenie pliku eslintrc

##.przenieśc extands z package.json do .eslintrc

    {
        	"extends": ["react-app"]
    }

##. zainstalowanie paczki airbn, potrzeba kilka paczek zainstalowac, ale istnieje jedna komenda:

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

    ##w pliku .eslint w "extands"

    "extends": ["airbnb", "prettier", "prettier/react", "airbnb/hooks"],
