Команда "catchAndStubbedYandexTrackerRequests" в каждом "beforeEach" используется для блока яндес метрики.

Команда "ignoreSyntaxError" в каждом "beforeEach" используется для блока ошибки синтаксиса.

Команда "wait(1000)" в каждом "beforeEach" используется для того что бы текст начал вводится в инпуты после авто скролинга до нижней части сайта.
Иначе часть текста не вводится пока идёт скроллинг.



В данном типе инпутов не получилось автотестом пропечатать пробел между двух слов в инпуте email.
Пробовал даже некой заменой строки через JS.
Хотя при вводе вручную имеется такая возможность. Сама функциональность не считает email с пробелами валидными значениями.
Поэтому проваливаются два теста: ()    
    
inputs-validation:    
    email with Space in name - is not correct    
    email with Space in domain - is not correct    
    

    
На данный момент проваливаются следующие тесты:    
    
inputs-validation:    
    name with 3 symbols (Space only) - is not correct (Сайт считает это корректно)    
    email with Dot in name - is correct               (Сайт считает это не корректно)    
    email with Dual domain - is correct               (Сайт считает это не корректно)    
    email with Underscore in domain - is not correct  (Сайт считает это корректно)    
    phone less than 10 numbers (9) - is not correct   (Сайт считает это корректно)    
    
    
    
Используемые проверки на инпуты:    
    
validName:    
"examplename" // Имя без пробелов и нижним регистром    
"EXAMPLE NAME" // Имя с пробелом и верхним регистром    
"Example NAME SecondName" // Имя двумя пробелами    
"Abc" // Минимально допустимое имя (3 символа)    
"Кириллица" // Имя на кириллице    
    
invalidName:    
"" // Пустое поле    
" " // Только пробел    
"Name12345" // Имя с цифрами    
"Name!" // Имя со спецсимволом    
"Ab" // Имя менее 3х букв    
"   " // Имя с допустимым минимумом символов, но пробелы    
    
validEmail:    
"mail@fortech.dev" // Email в нижнем регистре    
"MAIL@FORTECH.DEV" // Email в верхнем регистре    
"mail12345@fortech.dev" // Email с цифрами в имени    
"mail@12fortech345.dev" // Email с цифрами в домене    
"mail-mail@fortech.dev" // Email с дефисом в имени    
"mail@for-tech.dev" // Email с дефисом в доменной части    
"mail_mail@fortech.dev" // Email со знаком подчеркивания в имени аккаунта    
"mail.mail@fortech.dev" // Email с точками в имени аккаунта    
"mail@fortech.domain.dev" // Email с двойным доменом    
//    
//    
//    
    
invalidEmail:   
"" // Пустое поле   
" " // Поле только с пробелом   
".mail@fortech.dev" // Email с точкой перед именем    
"mail.@fortech.dev" // Email с точкой после имени    
"mail@.fortech.dev" // Email с точкой перед доменом    
"mail@fortech..dev" // Email с точкой после домена    
"mail@fortechdev" // Email без точек в доменной части   
"mailfortech.dev" // Отсутствие @ в email   
"mail mail@fortech.dev" // Email с пробелом в имени аккаунта    
"mail@for tech.dev" // Email с пробелом в доменной части    
"mail@for_tech.dev" // Email со знаком подчеркивания в доменной части    
"@fortech.dev" // Email без имени аккаунта    
"mail@" // Email без доменной части    
//    
//    
//    

validPhone:    
"1234567890" // Правильный номер телефона (10 символов)    
    
invalidPhone:    
"123456789" // Номер с менее 10 символами    
"123456789011111" // Ввод номер более чем с 10 символами невозможен    
"" // Пустое поле    
"abcABC" // Ввод букв невозможен    
"+!@#$%^&*()" // Ввод спецсимволов невозможен    