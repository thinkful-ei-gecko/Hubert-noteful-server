const FoldersService = {
  getAllFolders(db) {
    return db.select('*').from('noteful_folders');
  },

  getFolderById(db, id) {
    return db
      .select('*')
      .from('noteful_folders')
      .where('id', id)
      .first();
  },

  insertFolder(db, newFolder) {
    return db
      .insert(newFolder)
      .into('noteful_folders')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  updateFolder(db, id, newFolderFields) {
    return db
      .select('*')
      .from('noteful_folders')
      .where({ id })
      .update(newFolderFields);
  },

  deleteFolder(db, id) {
    return db('noteful_folders')
      .select('*')
      .from('noteful_folders')
      .where({ id })
      .delete();
  },

};

module.exports = FoldersService;