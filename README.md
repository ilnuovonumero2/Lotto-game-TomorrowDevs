# Lotto-game-TomorrowDevs
A NodeJS CLI Lottery App, based on the Italian Lotto® System. Final project for the Programming Course by TomorrowDevs.

## Table of Contents
1. [Spiegazione del gioco del lotto](#spiegazione-del-gioco-del-lotto)
2. [Come è sviluppato il progetto](#come-è-sviluppato-il-progetto)
3. [Che cosa fa la classe Ticket](#che-cosa-fa-la-classe-ticket)
4. [Che cosa fa la classe PrizeCalculator](#che-cosa-fa-la-classe-prizecalculator)
5. [Che cosa fa la classe LottoDraw](#che-cosa-fa-la-classe-lottodraw)
6. [Che cosa fa la classe LottoGame](#che-cosa-fa-la-classe-lottogame)
7. [Come si gioca](#come-si-gioca)

## Spiegazione del gioco del lotto

Il lotto è un gioco d'azzardo che permette ai partecipanti di scommettere su numeri, che vengono poi estratti in sorte. Ogni partecipante acquista uno o più "biglietti", ciascuno dei quali contiene un set di numeri scelti dal giocatore o generati casualmente. Le estrazioni vengono effettuate periodicamente e i premi vengono assegnati in base al numero di coincidenze tra i numeri estratti e quelli presenti sui biglietti.

## Come è sviluppato il progetto

Questo progetto è sviluppato in Node.js e sfrutta diverse classi per simulare il gioco del lotto. Le classi principali includono `Ticket`, `PrizeCalculator`, `LottoDraw`, e `LottoGame`. Ogni classe ha un ruolo specifico nella gestione del gioco, dalla generazione dei biglietti alla calcolazione dei premi. Inoltre, il progetto utilizza Jest per i test unitari, assicurando che tutte le funzionalità siano completamente testate.

## Che cosa fa la classe Ticket

La classe `Ticket` è responsabile della creazione di un singolo biglietto di lotto. Contiene informazioni come il tipo di scommessa, la quantità di numeri da generare, la città per la quale si sta giocando, e l'importo della scommessa. Genera anche i numeri casuali che verranno utilizzati per il biglietto.

## Che cosa fa la classe PrizeCalculator

La classe `PrizeCalculator` è incaricata di calcolare l'importo delle vincite in base al numero di coincidenze tra i numeri sul biglietto e quelli estratti. Utilizza una serie di algoritmi e formule matematiche per determinare l'importo esatto che un giocatore ha vinto.

## Che cosa fa la classe LottoDraw

La classe `LottoDraw` gestisce l'estrazione dei numeri per il gioco. Genera un set di numeri casuali per ciascuna città e li memorizza in un oggetto. Questi numeri verranno poi utilizzati per determinare i vincitori.

## Che cosa fa la classe LottoGame

La classe `LottoGame` è la classe principale che coordina tutte le altre classi. Gestisce l'intera logica del gioco, dalla creazione dei biglietti all'estrazione dei numeri e alla calcolazione delle vincite.

## Come si gioca

Per giocare, l'utente deve prima inserire il numero di biglietti che desidera generare. Successivamente, per ciascun biglietto, dovrà fornire dettagli come il tipo di scommessa, la quantità di numeri da generare, la città per la quale sta giocando e l'importo della scommessa. Una volta inserite tutte queste informazioni, il gioco inizierà, effettuerà un'estrazione e calcolerà eventuali vincite.

