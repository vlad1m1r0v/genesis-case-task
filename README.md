# <u>genesis case task</u>

- ### About app:
    - is built using Node.js (Express, TypeScript)
    - logic is divided into 3 layers:
        - repository (working with file storage (in my case all e-mails are stored in *emails.json* file.))
        - services (class, that contains functions for accessing e-mails from file (emails), mailing service (sender,
          uses Nodemailer + google smtp server under the hood), service that uses coinmarketapp as 3rd party service for
          accessing bitcoin rate (cryptoAPI))
        - controllers (class functions, that respond http requests coming from the server (rate &rarr; cryptoAPI,
          subscribe &rarr; emails, sendEmails &rarr; sender))
    - *common* contains shareable types, enums, interfaces that are used across the app.
    - *middleware* contains logger that logs all the requests (request url and datetime) incoming from the server. Isn't
      necessary, but I created it when my containerized server didn't respond to request, so I wanted to monitor the
      behavior of it.
- ### How to run app:
    - <code>git clone https://github.com/vlad1m1r0v/genesis-case-task.git </code>
    - create *.env* file in <b>src/configs</b> (*.env.example* is a sample, also you can watch my config here and
      copypaste in *.env* if you fell lazy to config your e-mail and create coinmarketapp profile to access crypto api).
    - run in terminal <code>docker build . -t genesis-case-task</code> for creating image. After that run <code>docker
      run -p 5000:5000 -d genesis-case-task
      </code> to run a container.
- ### Important notes:
    - e-mail message has a high risk to be put in spam/promos/social media category in gmail, so check these categories
      if you want to see this message which is not displayed in main thread. Gmail can also block such kind of messages,
      so try to make multiple <b>/sendEMails</b> requests.