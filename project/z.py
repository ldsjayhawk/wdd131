with open("fgm_draft.csv") as draft_file:
    next(draft_file)
    for line in draft_file:
        list = line.split(",")