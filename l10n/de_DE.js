OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Anfrage fehlgeschlagen, Netzwerkverbindung nicht verfügbar!",
    "Request unauthorized. Are you logged in?" : "Anfrage nicht autorisiert. Sind Sie angemeldet?",
    "Request forbidden. Are you an admin?" : "Anfrage verboten. Sind Sie ein Admin?",
    "Token expired or app not enabled! Reload the page!" : "Token abgelaufen oder App nicht aktiviert! Bitte laden Sie die Seite neu!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Interner Serverfehler! Bitte kontrollieren Sie data/nextcloud.log für weitere Informationen!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Anfrage fehlgeschlagen, diese Nextcloud-Instanz befindet sich derzeit im Wartungsmodus.",
    "Can not add feed: Unable to parse feed" : "Feed konnte nicht hinzugefügt werden: Feed konnte nicht gelesen werden",
    "Can not add feed: Exists already" : "Feed konnte nicht hinzugefügt werden:  Existiert bereits",
    "Articles without feed" : "Artikel ohne Feed",
    "Can not add folder: Exists already" : "Ordner kann nicht hinzgefügt werden: Existiert bereits",
    "News" : "News",
    "An RSS/Atom feed reader" : "Ein RSS/Atom Feed-Reader",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "Die News-App ist ein RSS/Atom-Feed-Reader für Nextcloud der mit vielen Mobilgeräten synchronisiert werden kann. Eine Liste aller Clients und Anforderungen ist [in der README](https://github.com/nextcloud/news) enthalten.\n\nVor einer Aktualisierung auf eine neuere Version bitte das [changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) überprüfen um Überraschungen zu vermeiden.\n\n**Wichtig**: Um die abonnierten Feeds zu aktualisieren muss entweder der [Nextcloud System Cron](https://docs.nextcloud.orgcom/server/latest10/admin_manual/configuration_server/background_jobs_configuration.html#cron) aktiviert sein oder ein [Updater](https://github.com/nextcloud/news-updater) der die eingebaute Update-API verwendet und der Cron-Updater abgeschaltet werden. Weitere Informationen [in der README](https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Verwende System-Cron für Aktualisierungen",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Deaktivieren Sie diese Option, wenn Sie einen eigenen Updater wie z.B. den Python-Updater aus der App laufen lassen",
    "Purge interval" : "Säuberungssintervall",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Minimum an Sekunden, nachdem gelöschte Feeds und Ordner aus der Datenbank entfernt werden; Werte unter 60 Sekunden werden ignoriert",
    "Maximum read count per feed" : "Maximale Anzahl an gelesenen Artikeln pro Feed",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "Definiert die maximale Anzahl an Artikeln, die pro Feed gelesen und bei einem Säuberungsauftrag nicht aus der Datenbank gelöscht werden; wenn ältere Artikel nach dem Lesen erhalten bleiben sollen, erhöhen Sie diesen Wert; negative Werte wie -1 deaktivieren diese Funktion komplett",
    "Maximum redirects" : "Maximale Anzahl Weiterleitungen",
    "How many redirects the feed fetcher should follow" : "Anzahl Weiterleitungen die der Feed-Sammler folgen soll",
    "Maximum feed page size" : "Maximale Seitengröße des Feeds",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Maximale Feedgröße in Bytes. Wenn die RSS/Atom-Seite größer als dieser Wert ist, wird die Aktualisierung abgebrochen",
    "Feed fetcher timeout" : "Zeitüberschreitung Feed-Sammler",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Maximale Anzahl an Sekunden zum Laden eines RSS- oder Atom-Feeds. Wenn dies länger dauert, wird die Aktualisierung abgebrochen.",
    "Explore Service URL" : "Service-URL finden",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Falls angegeben, wird die URL dieses Dienstes zur Feed-Anzeige innerhalb des Explore-Feed-Bereichs abgefragt. Lassen Sie dieses Feld unausgefüllt, um auf den eingebauten Explore-Dienst zurückzugreifen.",
    "For more information check the wiki" : "Für weitere Informationen besuchen Sie das Wiki ",
    "Update Interval" : "Aktualisierungsintervall",
    "Interval in which the feeds will be updated " : "Intervall, in dem die Feeds aktualisiert werden",
    "Saved" : "Gespeichert",
    "Download" : "Herunterladen",
    "Close" : "Schließen",
    "filter" : "Filter",
    "Language" : "Sprache",
    "Subscribe" : "Abonnieren",
    "Got more awesome feeds? Share them with us!" : "Haben Sie aufregende Feeds? Teilen Sie diese mit uns!",
    "No articles available" : "Keine Artikel verfügbar",
    "No unread articles available" : "Keine ungelesenen Artikel verfügbar",
    "Open website" : "Internetseite öffnen",
    "Star article" : "Artikel markieren",
    "Unstar article" : "Markierung aufheben",
    "Keep article unread" : "Artikel ungelesenen lassen",
    "Remove keep article unread" : "„Artikel ungelesenen lassen“ entfernen",
    "by" : "von",
    "from" : "von",
    "Play audio" : "Audio wiedergeben",
    "Download audio" : "Audio herunterladen",
    "Download video" : "Video herunterladen",
    "Keyboard shortcut" : "Tastaturbefehl",
    "Description" : "Beschreibung",
    "right" : "Rechts",
    "Jump to next article" : "Zum nächsten Artikel springen",
    "left" : "Links",
    "Jump to previous article" : "Zum vorherigen Artikel springen",
    "Toggle star article" : "Markierung des Artikels umschalten",
    "Star article and jump to next one" : "Artikel markieren und zum Nächsten springen",
    "Toggle keep current article unread" : "Umschalten lässt den Artikel ungelesen",
    "Open article in new tab" : "Artikel in neuen Tab öffnen",
    "Toggle expand article in compact view" : "Umschalten zeigt den kompletten Artikel in der kompakten Ansicht",
    "Refresh" : "Aktualisieren",
    "Load next feed" : "Nächsten Feed laden",
    "Load previous feed" : "Vorherigen Feed laden",
    "Load next folder" : "Nächsten Ordner laden",
    "Load previous folder" : "Vorherigen Ordner laden",
    "Scroll to active navigation entry" : "Zum aktiven Navigationseintrag scrollen",
    "Focus search field" : "Suchfeld aktivieren",
    "Mark current article's feed/folder read" : "Feed/Ordner dieses Artikels als gelesen markieren",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Ajax oder ein webbasierter Cron-Modus gefunden! Ihre Feeds werden nicht aktualisiert! ",
    "How to set up the operating system cron" : "Wie der Cron des Betriebssystems eingerichtet wird",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Installieren und richten Sie einen schnellen, parallelen Updater ein, der die Update-API der News-App nutzt",
    "Web address" : "Internetadresse",
    "Feed exists already!" : "Der Feed existiert bereits!",
    "Folder" : "Ordner",
    "No folder" : "Kein Ordner",
    "New folder" : "Neuer Ordner",
    "Folder name" : "Ordnername",
    "Go back" : "Zurück gehen",
    "Folder exists already!" : "Der Ordner existiert bereits!",
    "Credentials" : "Zugangsdaten",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "Die Anmeldeinformationen der HTTP-Standardauthentifizierung müssen unverschlüsselt gespeichert werden! Jeder mit Serverzugriff ist in der Lage diese Daten zu lesen.",
    "Username" : "Benutzername",
    "Password" : "Passwort",
    "New Folder" : "Neuer Ordner",
    "Create" : "Erstellen",
    "Explore" : "Entdecken",
    "Update failed more than 50 times" : "Aktualisierung ist mehr als 50 mal fehlgeschlagen",
    "Deleted feed" : "Feed gelöscht",
    "Undo delete feed" : "Gelöschten Feed wiederherstellen",
    "Rename" : "Umbenennen",
    "Menu" : "Menü",
    "Mark read" : "Als gelesen markieren",
    "Unpin from top" : "Fixierung aufheben",
    "Pin to top" : "Oben fixieren",
    "Newest first" : "Neueste zuerst",
    "Oldest first" : "Älteste zuerst",
    "Default order" : "Standard-Sortierung",
    "Enable full text" : "Volltext aktivieren",
    "Disable full text" : "Volltext deaktivieren",
    "Unread updated" : "Ungelesene aktualisiert",
    "Ignore updated" : "Aktualisierte ignorieren",
    "Open feed URL" : "Feed-URL öffnen",
    "Delete" : "Löschen",
    "Dismiss" : "Ausblenden",
    "Collapse" : "Zuklappen",
    "Deleted folder" : "Ordner gelöscht",
    "Undo delete folder" : "Gelöschten Ordner wiederherstellen",
    "Starred" : "Markiert",
    "Unread articles" : "Ungelesene Artikel",
    "All articles" : "Alle Artikel",
    "Settings" : "Einstellungen",
    "Disable mark read through scrolling" : "Keine Artikel während des Bildlaufs als gelesen markieren",
    "Compact view" : "Kompakte Ansicht",
    "Expand articles on key navigation" : "Artikel bei der Tasten-Navigation erweitern",
    "Show all articles" : "Alle Artikel anzeigen",
    "Reverse ordering (oldest on top)" : "Sortierung umkehren (älteste zuerst)",
    "Subscriptions (OPML)" : "Abonnements (OPML)",
    "Import" : "Importieren",
    "Export" : "Exportieren",
    "Error when importing: File does not contain valid OPML" : "Fehler beim Importieren: Datei enthält kein gültiges OPML",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Fehler beim Importieren: OPML enthält weder Feeds noch Ordner",
    "Unread/Starred Articles" : "Ungelesene/Markierte Artikel",
    "Error when importing: file does not contain valid JSON" : "Fehler beim Importieren: Datei enthält kein gültiges JSON",
    "Help" : "Hilfe",
    "Keyboard shortcuts" : "Tastaturkürzel",
    "Documentation" : "Dokumentation",
    "Report a bug" : "Melden Sie einen technischen Fehler"
},
"nplurals=2; plural=(n != 1);");
