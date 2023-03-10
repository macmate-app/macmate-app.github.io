## 如何用一个新的 GitHub 用户提交代码

ssh-keygen 一套新的 key， 名字叫做 id_rsa2

```
git config --add --local core.sshCommand 'ssh -i /Users/chuntaoliu/.ssh/id_rsa2'
git config --local credential.helper ""
```

根据我的理解，可以简化为

```
git config core.sshCommand 'ssh -i /Users/chuntaoliu/.ssh/id_rsa2'
git config credential.helper ""
```
