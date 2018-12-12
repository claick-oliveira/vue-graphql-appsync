# Vue + [AWS AppSync](https://aws.amazon.com/appsync/) + GraphQL App

Task Manager Application built using [Vue](https://vuejs.org/), [AWS AppSync](https://aws.amazon.com/appsync/), and [Vue Apollo](https://github.com/Akryum/vue-apollo)
This application goes along with the medium blog [Full Stack Vue with GraphQL & AWS AppSync](https://medium.com/@dabit3/full-stack-vue-with-graphql-aws-appsync-adc5af474dc9)

![](https://i.imgur.com/9TdyOOi.jpg)


## Getting started

1. clone project

```
git clone https://github.com/jefp/vue-graphql-appsync.git
```

2. cd into directory

```
cd vue-graphql-appsync
```

3. install dependencies using npm or yarn

```
yarn || npm install
```

4. create a new AppSync Project with the following schema using the [Create with wizard](https://docs.aws.amazon.com/appsync/latest/devguide/provision-with-wizard.html)

[Video walkthrough](https://www.youtube.com/watch?v=0Xbt7VqkJNc) (replace Todo with Task, and fetchTodos with fetchTasks), or go to [AWS AppSync](https://aws.amazon.com/appsync/) if you already are familiar with how to create the correct schema.


**ModelName: Task**

**Model Fields:**

 ```
| Name      | Type    | Required |
| --------- | ------- | -------- |
| id        | ID      | Yes      |
| name      | String  | Yes      |
| completed | Boolean | Yes      |
```

5. Create a file  `src/AppSync.js` using `src/AppSync.js.template` with the corresponding credentials


6. Run

```
npm run dev
```

7. Open your browser http://localhost:8080
