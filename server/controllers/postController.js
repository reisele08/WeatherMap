exports.edit = function(req, res) {
    let post = new Post(req.body, req.visitorId, req.params.id)
    post.update().then((status) => {
      // the post was successfully updated in the database
      // or user did have permission, but there were validation errors
      if (status == "success") {
        // post was updated in db
        req.flash("success", "Post successfully updated.")
        req.session.save(function() {
          res.redirect(`/post/${req.params.id}/edit`)
        })
      } else {
        post.errors.forEach(function(error) {
          req.flash("errors", error)
        })
        req.session.save(function() {
          res.redirect(`/post/${req.params.id}/edit`)
        })
      }
    }).catch(() => {
      // a post with the requested id doesn't exist
      // or if the current visitor is not the owner of the requested post
      req.flash("errors", "You do not have permission to perform that action.")
      req.session.save(function() {
        res.redirect("/")
      })
    })
  }
  
  exports.delete = function(req, res) {
    Post.delete(req.params.id, req.visitorId).then(() => {
      req.flash("success", "Post successfully deleted.")
      req.session.save(() => res.redirect(`/profile/${req.session.user.username}`))
    }).catch(() => {
      req.flash("errors", "You do not have permission to perform that action.")
      req.session.save(() => res.redirect("/"))
    })
  }
  